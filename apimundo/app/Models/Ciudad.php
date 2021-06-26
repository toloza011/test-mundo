<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    use HasFactory;
    protected $table = "ciudades";

    protected $fillable = ['ciu_nombre','provincia_id'];

    public function provincia(){
        return $this->belongsTo(Provincia::class,'provincia_id');
    }

    public function calles(){
        return $this->hasMany(Calle::class,'ciudad_id');
    }

}
