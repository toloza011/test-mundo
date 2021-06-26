<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calle extends Model
{
    use HasFactory;

    protected $fillable = ['nombre','ciudad_id'];

    public function provincia(){
        return $this->belongsTo(Ciudad::class,'ciudad_id');
    }

   
}
