<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Buradaki rotalar `api` middleware grubuna atanır.
| Frontend tarafındaki iletişim formu bu endpoint üzerinden çalışacaktır.
|
*/

Route::middleware('api')->group(function () {
    Route::post('/contact', [ContactController::class, 'store'])
        ->name('api.contact.store');
});

