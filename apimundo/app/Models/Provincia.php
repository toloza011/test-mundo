<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    use HasFactory;
    protected $table = "provincias";

    protected $fillable = ['prov_nombre','regiones_id'];

    public function region(){
        return $this->belongsTo(Region::class,'regiones_id');
    }

    public function ciudades(){
        return $this->hasMany(Ciudad::class,'provincia_id');
    }
    
}
