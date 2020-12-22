<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/**
 * Public routes
 */
Route::post('login', [AuthController::class, 'login']);


/**
 * Auth routes
 */
Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('users', UsersController::class)->only('index', 'show');
    Route::get('users/auth', [UsersController::class, 'auth']);
});

