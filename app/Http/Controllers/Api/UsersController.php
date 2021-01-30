<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class UsersController extends Controller
{

    public function index()
    {
        return QueryBuilder::for(User::class)->get();
    }


    public function store(Request $request)
    {
        //
    }

    public function show(User $user)
    {
        return $user;
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update($request->validated());
        return $user;
    }

    public function destroy($id)
    {
        //
    }

    ///
    ///
    public function auth(Request $request)
    {
        $user = $request->user();
        $user->append('primary_role_name');
        return ['data' => $user];
    }
}
