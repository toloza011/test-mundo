# Test Desarrollador Inicial Mundo

## Documentación

- [Traducción de la documentación oficial](https://laravel.com/docs/8.x)


## Prerrequisitos
- **[Composer](https://getcomposer.org)**
- **[NodeJs](https://nodejs.org/es/)**
- **[Git](https://git-scm.com/downloads)**

# Instalación

## Clonar Proyecto 

Ejecutar el comando `git clone https://github.com/toloza011/test-mundo.git`

## Instalar dependencias en Laravel

Desde el directorio apimundo, ejecutar el comando `composer install`

## Configurar Variables de entorno

Desde el directorio apimundo, ejecutar el comando `cp .env.example .env` para crear el archivo de configuración del entorno de desarrollo.
Luego de generar el archivo es necesario crear una base de datos y modificar las credenciales de acceso en el archivo `.env`.

Las variables a modificar son las siguientes : 
- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=nombre-base-de-datos
- DB_USERNAME=root
- DB_PASSWORD=contraseña

## Generar clave de seguridad de la aplicación

Ejecutar `php artisan key:generate`

## Migrar y seedear la base de datos 

Para ejecutar las migraciones y poblar la base de datos ejecutar: `php artisan migrate:fresh --seed`

## Ejecutar API

Para correr la aplicación ejecutar: `php artisan serve` 
Esto dejara corriendo la api en el puerto de su localhost.

## Ejecutar aplicación en ReactJs

Abrir otra consola y desde el directorio testmundo, ejecutar : `npm install`. 
Esto instalará las dependencias necesarias para el proyecto. Luego de finalizar ejecutar: `npm start`, esto abrirá la aplicación en su navegador.
En caso de no cargar los datos en la aplicación verificar que el puerto corriendo en laravel sea el mismo que el de la aplicación en ReactJs.

## Datos de prueba 

- VIII Región - Provincia Biobío - Ciudad de los angeles.
- VIII Región - Provincia Concepción - Ciudad de Concepción.
- VIII Región - Provincia Arauco - Ciudad de Arauco.
- Región Metropolitana - Provincia de Santiago - Ciudad de Santiago.
- V Región - Provincia Valparaíso - Ciudad de Valparaíso
- V Región - Provincia Valparaíso - Ciudad de Viña del Mar



