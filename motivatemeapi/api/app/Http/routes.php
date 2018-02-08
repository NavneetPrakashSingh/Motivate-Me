<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('api/user/{emailId}','apicontroller@userData');

Route::get('api/{id}','apicontroller@showQuote');

Route::get('api/likes/{quoteId}/{cromeId}','apicontroller@addlikes');

Route::post('api/userid/','apicontroller@userFunction');

Route::post('/test', 'apicontroller@testfunction');
