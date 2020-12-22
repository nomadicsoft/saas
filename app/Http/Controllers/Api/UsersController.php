<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    ///
    ///
    public function auth(Request $request)
    {
        return $request->user();
    }
}
