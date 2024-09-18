<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TravelController extends Controller
{
    public function alltravels()
    {
        $travel = Travel::all();
        return response()->json([
            "travels" => $travel
        ]);
    }

    public function storetravel(Request $req)
    {
        try {
            $validator = Validator::make($req->all(), [
                "image" => "required|image",
                'destination' => 'required|string',
                'description' => 'required',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date',
                'ticket_price' => 'required|numeric|min:1',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 400);
            } else {
                $path = $req->image->store("travel/image", "public");
                $travel = new Travel();
                $travel->image = $path;
                $travel->destination = $req->destination;
                $travel->description = $req->description;
                $travel->start_date = $req->start_date;
                $travel->end_date = $req->end_date;
                $travel->ticket_price = $req->ticket_price;
                $travel->save();
            }

            return response()->json([
                "message" => "Travel has been stored successfully"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }


    public function edittravel(Request $req, $id)
    {
        $travel = Travel::find($id);
        return response()->json($travel);
    }

    public function updatetravel(Request $req, $id) {
        $validator = Validator::make($req->all(), [
            'destination' => 'required|string',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'ticket_price' => 'required|numeric|min:1',
        ]);
        $travel = Travel::find($id);
        if (!$travel) {
            return response()->json([
                "message" => "Travel not found."
            ], 404);
        }
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        } else {
            if($req->hasFile("image")){
                if($travel->image){
                    Storage::delete("public/".$travel->image);
                }
                $path = $req->image->store("travel/image", "public");
                $travel->image = $path;
            }
            $travel->destination = $req->destination;
            $travel->description = $req->description;
            $travel->start_date = $req->start_date;
            $travel->end_date = $req->end_date;
            $travel->ticket_price = $req->ticket_price;
            $travel->save();
    
            return response()->json([
                "message" => "Travel has been updated successfully"
            ]);
        }       
    }
    


    public function deletetravel(Request $req, $id)
    {
        $travel = Travel::find($id);
        $travel->delete();
        return response()->json("Travel has been deleted successfully");
    }
}
