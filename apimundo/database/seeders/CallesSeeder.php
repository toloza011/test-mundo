<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CallesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        $regions = [
            [1,'Arica y Parinacota','XV'],
            [2,'Tarapacá','I'],
            [3,'Antofagasta','II'],
            [4,'Atacama','III'],
            [5,'Coquimbo','IV'],
            [6,'Valparaiso','V'],
            [7,'Metropolitana de Santiago','RM'],
            [8,'Libertador General Bernardo O\'Higgins','VI'],
            [9,'Maule','VII'],
            [10,'Biobío','VIII'],
            [11,'La Araucanía','IX'],
            [12,'Los Ríos','XIV'],
            [13,'Los Lagos','X'],
            [14,'Aisén del General Carlos Ibáñez del Campo','XI'],
            [15,'Magallanes y de la Antártica Chilena','XII'],
            [16,'Ñuble','XVI'],
        ];

        $regions = array_map(function($region)  {
           return [
               'id' => $region[0],
               'reg_nombre' => $region[1],
               'reg_sigla' => $region[2],
           ];
        }, $regions);

        DB::table('regiones')->insert($regions);

        
       

        $provincias = [
            [1, 'Árica',1],
            [2, 'Parinacota',1],
            [3, 'Iquique',2],
            [4, 'Tamarugal',2],
            [5, 'Tocopilla',3],
            [6, 'El Loa',3],
            [7, 'Antofagasta',3],
            [8, 'Chañaral',4],
            [9, 'Copiapó',4],
            [10, 'Huasco',4],
            [11, 'Elqui',5],
            [12, 'Limarí',5],
            [13, 'Choapa',6],
            [14, 'Petorca',6],
            [15, 'Los andes',6],
            [16, 'San Felipe de Aconcagua',6],
            [17, 'Quillota',6],
            [18, 'Valparaíso',6],
            [19, 'San antonio',6],
            [20, 'Isla de pascua',6],
            [21, 'Marga Marga',6],
            [22, 'Chacabuco',7],
            [23, 'Santiago',7],
            [24, 'Cordillera',7],
            [25, 'Maipo',7],
            [26, 'Melipilla',7],
            [27, 'Talagante',7],
            [28, 'Cachapoal',8],
            [29, 'Colchagua',8],
            [30, 'Cardenal Caro',8],
            [31, 'Curicó',9],
            [32, 'Talca',9],
            [33, 'Linares',9],
            [34, 'Cauquenes',9],
            [35, 'Diguillín',16],
            [36, 'Itata',16],
            [37, 'Punilla',16],
            [38, 'Biobío',10],
            [39, 'Concepción',10],
            [40, 'Arauco',10],
            [41, 'Malleco',11],
            [42, 'Cautín',11],
            [43, 'Valdivia',12],
            [44, 'Ranco',12],
            [45, 'Osorno',13],
            [46, 'Llanquihue',13],
            [47, 'Chiloé',13],
            [48, 'Palena',13],
            [49, 'Coyhaique',14],
            [50, 'Aysén',14],
            [51, 'General Carrera',14],
            [52, 'Capitán Prat',14],
            [53, 'Última Esperanza',15],
            [54, 'Magallanes',15],
            [55, 'Tierra del fuego',15],
            [56, 'Antártica Chilena',15],
        ];
        
        //recorrer provincias y establecer formato de migracion
        $provincias = array_map(function($provincia){
            return [
              'id' => $provincia[0],
              'prov_nombre' => $provincia[1],
              'regiones_id' => $provincia[2]
            ];
        },$provincias);

        //insertar provincias
        DB::table('provincias')->insert($provincias);



        $ciudades = [
           [1,'Concepcion',39],
           [2,'Arauco',40],
           [3,'Los Ángeles',38],
           [4,'Santiago',23],
           [5,'Valparaíso',18],
           [6, 'Viña del Mar',18],
        ];

        $ciudades = array_map(function($ciudad){
            return [
              'id' => $ciudad[0],
              'ciu_nombre' => $ciudad[1],
              'provincia_id' => $ciudad[2]
            ];
        },$ciudades);
        //Insertar comunas
        DB::table('ciudades')->insert($ciudades); 

        $calles = [
            [1,'Collao',1],
            [2,'Carrera',1],
            [3,'Caupolican',2],
            [4,'Fresia',2],
            [5,'Galvarino',3],
            [6,'Av. Ricardo Vicuña',3],
            [7,'Moneda',4],
            [8,'Av. Departamental',4],
            [9,'Av. Lo espejo',4],
            [10,'Coronel Silva Vergara',5],
            [11,'Pacifico',5],
            [12,'Calle Veinticinco',5],
            [13,'Las rejas',6],
            [14,'Álvarez',6],
            [15,'Limache',6]
        ];
        $calles = array_map(function($calle){
            return [
              'id' => $calle[0],
              'nombre' => $calle[1],
              'ciudad_id' => $calle[2]
            ];
        },$calles);
        //insertar calles
        DB::table('calles')->insert($calles);
    }
}
