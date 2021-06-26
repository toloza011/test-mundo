<?php

namespace App\Http\Controllers;

use App\Models\Ciudad;
use App\Models\Provincia;
use App\Models\Region;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function regiones(Request $request){
      
         $regiones = Region::all();
         
         return response()->json([
           'status' => 200,
           'regiones' => $regiones
         ]);
    }

    public function provincias(Request $request,$region_id){
        $region = Region::find($region_id);
        if($region){
            //si existe la region se almacenan las provincias..
            $provincias = $region->provincias;

            return response()->json([
                'status' => 200,
                'provincias' => $provincias
            ]);
        }else{
            return response()->json([
                'status' => 500,
                'message' => "Ha ocurrido un error inesperado. Verifique los datos ingresados."
            ]);
        }
    }

    public function ciudades(Request $request,$id){
        $provincia = Provincia::find($id);
        if($provincia){
            $ciudades = $provincia->ciudades;
            return response()->json([
                'status' => 200,
                'ciudades' => $ciudades
            ]);
        }else{
            return response()->json([
                'status' => 500,
                'message' => "Ha ocurrido un error inesperado. Verifique los datos ingresados."
              ]);
        }
    }

    public function calles(Request $request,$id){
        $ciudad = Ciudad::find($id);
        if($ciudad){
            $calles = $ciudad->calles;
            return response()->json([
                'status' => 200,
                'calles' => $calles
            ]);
        }else{

            return response()->json([
                'status' => 500,
                'message' => "Ha ocurrido un error inesperado. Verifique los datos ingresados."
            ]);
        }
       
    }
}
