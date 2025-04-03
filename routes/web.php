<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('periksa', function () {
        return Inertia::render('periksa');
    })->name('periksa');

    Route::get('obat', function () {
        return Inertia::render('obat');
    })->name('obat');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
