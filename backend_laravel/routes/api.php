<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\PassportAuthUser;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\TravelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/login", [PassportAuthUser::class, "login"]);
Route::post("/register", [PassportAuthUser::class, "registerClient"]);
Route::post("/register/admin", [PassportAuthUser::class, "registerAdmin"]);

Route::get('/travels', [TravelController::class, 'alltravels']);

Route::middleware(['auth:api'])->group(function () {
    //user route
    Route::get("/user/info", [PassportAuthUser::class, "userinfo"]);
    Route::get("/users", [PassportAuthUser::class, "allusers"]);
    Route::get("/user/{id}", [PassportAuthUser::class, "edituser"]);
    Route::post('/user/{id}', [PassportAuthUser::class, 'update']);
    Route::delete('/user/{id}', [PassportAuthUser::class, 'destroy']);
    Route::get("/all/admin",[PassportAuthUser::class, "userAdmin"]);
    Route::post("/logout",[PassportAuthUser::class,"logout"]);
    //review route
    Route::get("/reviews", [ReviewController::class, "allreviews"]);
    Route::get("/review/user", [ReviewController::class, "userReviews"]);
    Route::post("/review", [ReviewController::class, "storeReview"]);
    Route::get("/review/{id}", [ReviewController::class, "editReview"]);
    Route::put("/review/{id}", [ReviewController::class, "updateReview"]);
    Route::delete("/review/{id}", [ReviewController::class, "destroyReview"]);
    //travel route
    Route::post('/travel', [TravelController::class, 'storetravel']);
    Route::get('/travel/{id}', [TravelController::class, 'edittravel']);
    Route::post('/travel/{id}', [TravelController::class, 'updatetravel']);
    Route::delete('/travel/{id}', [TravelController::class, 'deletetravel']);
    //reservation route
    Route::get("/reservation/user", [ReservationController::class, "showUserReservations"]);
    Route::get("/reservation/{id}", [ReservationController::class, "showUserByIDReservations"]);
    Route::post('/add/reservation', [ReservationController::class, 'makeReservation']);
    Route::post('/reservation', [ReservationController::class, 'cancelReservation']);
});
