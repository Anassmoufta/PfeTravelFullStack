<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    public function allreviews() {
        $reviews = DB::table('users')
        ->join('reviews', 'users.id', '=', 'reviews.user_id')
        ->join('travels', 'travels.id', '=', 'reviews.travel_id')
        ->select( "reviews.id" ,'users.name', 'users.image', 'users.cin', 'users.phone', 'users.email', 'reviews.comment', 'reviews.stars', 'travels.destination')
        ->get();
        return response()->json([
            "reviews" => $reviews
        ]);
    }
    public function storeReview(Request $req) {
        $review = new Review() ;
        $review->comment = $req->comment ;
        $review->stars = $req->stars ;
        $review->user_id = $req->user_id ;
        $review->travel_id = $req->travel_id ;
        $review->save();
        return response()->json([
            "message" => "Review added successfully"
            ]);
    }
    public function userReviews() {
        $review = DB::table('users')
        ->join('reviews', 'users.id', '=', 'reviews.user_id')
        ->join('travels', 'travels.id', '=', 'reviews.travel_id')
        ->select("users.id",'users.name', 'users.image', 'users.cin', 'users.phone', 'users.email', 'reviews.comment', 'reviews.stars', 'travels.destination')
        ->where('users.id', auth()->user()->id)
        ->get();
        return response()->json([
            "review" => $review
            ]);
    }
    public function editReview($id){
        $review = Review::select("id","comment","stars","travel_id")->where("id",$id)->get();
        if(!$review){
            return response()->json([
                "message" => "Review not found"
                ]);
        }else{
            return response()->json([
            "review" => $review
            ]);
        }
        
    }
    public function updateReview(Request $req,$id){
        $review = Review::findOrFail($id);
        if(!$review){
            return response()->json([
                "message" => "Review not found"
                ]);
        }else{
            $review->comment = $req->comment ;
        $review->stars = $req->stars ;
        $review->user_id = auth()->user()->id ;
        $review->save();
        return response()->json([
            "review" => $review ,
            "message" => "Review Updated successfully"
            ]);
        }
        
    }
    public function destroyReview($id){
        $review = Review::findOrFail($id);
        if(!$review){
            return response()->json([
                "message" => "review not"
            ]);
        }else{
            $review->delete();
        return response()->json([
            "message" => "Review Deleted successfully"
            ]);
        }
        
    }
}
