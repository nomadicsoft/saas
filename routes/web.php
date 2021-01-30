<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::any('/{any}', [FrontendController::class,'spa'])->where('any', '^(?!api).*$');

Route::get('reset-password',function () {return response(42);})->name('password.reset');
