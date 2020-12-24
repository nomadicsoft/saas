<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
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

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('my-app-token')->plainTextToken,
        ]);
    }
}
