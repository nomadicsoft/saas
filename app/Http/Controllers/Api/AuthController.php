<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $attributes = $request->validated();
        $user = User::where('email', $attributes['email'])->first();

        if (!$user || !Hash::check($attributes['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user->append(['primary_role_name', 'redirect_link']);
        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'user' => $user,
        ])->withHeaders([
            'Authorization' => $token
        ]);
    }

    public function logout(Request $request)
    {
        auth('sanctum')->user()->tokens()->delete();
        return response()->json([], 200);
    }

    public function register(RegisterRequest $request)
    {
        $attributes = $request->validated();

        $user = User::create([
            'email' => $attributes['email'],
            'password' => Hash::make($attributes['password'])
        ]);
        $token = $user->createToken('auth-token')->plainTextToken;
        $user->append(['primary_role_name', 'redirect_link']);

        return response()->json([
            'user' => $user,
        ])->withHeaders([
            'Authorization' => $token
        ]);
    }

    public function forgotPassword(ForgotPasswordRequest $request)
    {
        $attributes = $request->validated();
        $status = Password::sendResetLink($attributes);
        return response()->json(['success' => $status === Password::RESET_LINK_SENT]);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        $attributes =  $request->validated();

        $status = Password::reset(
            $attributes,
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();

                $user->setRememberToken(Str::random(60));

                event(new PasswordReset($user));
            }
        );

        $user = User::where('email', $attributes['email'])->first(); // Буэ
        return response()->json([
            'user' => $user,
            'token' => $user->createToken('my-app-token')->plainTextToken,
        ]);
    }
}
