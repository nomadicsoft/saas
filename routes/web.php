<?php

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
Route::get('reset-password', function () {
   dd(request()->all());
})->name('password.reset');
Route::any('/{any}', [FrontendController::class,'spa'])->where('any', '^(?!api).*$');
