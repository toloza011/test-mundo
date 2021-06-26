<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;
     
    protected $table = "regiones";

    protected $fillable = ['reg_sigla','reg_nombre'];

    public function provincias(){
        return $this->hasMany(Provincia::class,'regiones_id');
    }

}
