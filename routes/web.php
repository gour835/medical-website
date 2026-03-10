<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;



Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/shop', function () {
    return Inertia::render('shop');
})->name('shop');

Route::get('/comming-soon', function () {
    return Inertia::render('CommingSoon');
})->name('soon');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
