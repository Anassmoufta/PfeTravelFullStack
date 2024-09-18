<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    use HasFactory;
    protected $table = "travels" ;
    protected $fillable = [
        "destination" ,
        "image",
        "description",
        "start_date" ,
        "end_date" ,
        "ticket_price"
    ];
    public function User() {
        $this->belongsToMany(User::class,"user_travels");
    }
}
    