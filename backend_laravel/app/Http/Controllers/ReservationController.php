<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Models\User;
use App\Models\User_travel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReservationController extends Controller
{
    public function makeReservation(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'user_id' => 'required|integer',
            'travel_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                "status" => 401
            ], );
        }

        $reservation = User_travel::where('user_id', $req->user_id)
            ->where('travel_id', $req->travel_id)
            ->first();

        if ($reservation) {
            return response()->json([
                "message" => "Reservation already exists" ,
                "status" => 400 
            ]);
        }

            $reservation = new User_travel();
            $reservation->user_id = $req->user_id;
            $reservation->travel_id = $req->travel_id;
            $reservation->save();

            return response()->json([
                "message" => "Reservation created successfully",
                "status" => 200
            ]);
    }

    public function cancelReservation(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'user_id' => 'required|integer',
            'travel_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $reservation = User_travel::where('user_id', $req->user_id)
            ->where('travel_id', $req->travel_id)
            ->first();

        if (!$reservation) {
            return response()->json([
                "message" => "Reservation does not exist"
            ]);
        }

        $reservation->delete();

        return response()->json([
            "message" => "Reservation cancelled successfully"
        ]);
    }
    public function showUserReservations()
    {
        $user_id = auth()->user()->id;
        $reservations = User::where('id', $user_id)->with(["Travel"])->get();
        return response()->json([
            "Reservations" => $reservations
        ]);
    }
    public function showUserByIDReservations($id)
    {
        $reservations = User::where('id', $id)->with("Travel")->get();
        return response()->json([
            "reservations" => $reservations
        ]);
    }
}
