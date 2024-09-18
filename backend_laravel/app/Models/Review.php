<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $table = "reviews";
    protected $fillable = [
        "comment",
        "stars",
        "user_id",
        "travel_id"
    ];
    public function User () {
        return $this->belongsTo(User::class) ;
    }
}
