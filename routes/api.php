<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BillingController;
use App\Http\Controllers\Api\PricePlansController;
use App\Http\Controllers\Api\UploadController;
use App\Http\Controllers\Api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/**
 * Public routes
 */
Route::post('login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout']);
Route::post('register', [AuthController::class, 'register']);
Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('reset-password', [AuthController::class, 'resetPassword']);


/**
 * Auth routes
 */
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('users/auth', [UsersController::class, 'auth']);
    Route::resource('users', UsersController::class)->only('index', 'show', 'store', 'update');

    Route::resource('price-plans', PricePlansController::class)->only('index', 'show', 'store', 'update');

    Route::get('billing/setup-intent', [BillingController::class, 'getSetupIntent']);
    Route::post('billing/payments', [BillingController::class, 'postPaymentMethods']);
    Route::get('billing/payment-methods', [BillingController::class, 'getPaymentMethods']);
    Route::post('billing/remove-payment', [BillingController::class, 'removePaymentMethod']);
    Route::put('billing/subscription', [BillingController::class, 'updateSubscription']);

    Route::post('upload', [UploadController::class, 'store']);
});

