<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_travel extends Model
{
    use HasFactory;
    protected $table = "user_travels" ;
    protected $fillable = [
        "user_id",
        "travel_id",
    ];
}
