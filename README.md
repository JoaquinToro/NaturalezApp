# NaturalezApp

## Descripción
NaturalezApp es una aplicación web/móvil que dispondrá de información sobre parques y reservas naturales dentro de Chile (inicialmente de la V región), noticias y tips sobre el medioambiente.

## Lectura de archivo JSON
- En la página RegistroUsuario, se lee el archivo Regiones.json desde ionicnaturalezapp/public/datos/regiones.json para manejar los datos de regiones y comunas
- En la página Home, se leen ciertas entradas de la base de datos en formato JSON para disponer la información en las cartas
- En la página Buscar, se lee la base de datos (en formato JSON) para realizar una búsqueda exacta y mostrar los resultados (EJ: buscar "Laguna La Luz")

## Base de Datos
NaturalezApp utiliza la base de datos relacional SQL propia llamada naturalezappDB. La elección de una base de datos relacional SQL es adecuada debido a la naturaleza estructurada e invariable (en su mayoría) de la información que manejará la aplicación. Los datos sobre parques y reservas naturales al igual que su fauna y flora asociada, junto con las noticias y tips relacionados con el medioambiente, requieren un modelo organizado que pueda gestionar relaciones entre entidades como parques, flora, fauna, y noticias.

### ERD NaturalezAppDB
![Diagrama Entidad Relación de NaturalezAppDB](https://github.com/JoaquinToro/NaturalezApp/blob/EP2/NaturalezAppDB_ERD.png?raw=true)

## Patrones de diseño
- En la página de registro de usuario, se muestran alertas concisas, claras y útiles al usuario para ver su error
- El logo de página lleva a la página principal, siguiendo las convenciones y estándares de la industria
- La página Home cuenta con un menú tipo hamburguesa, desplegable para ayudar al usuario con un menú de navegación familiar y útil
- La página Home cuenta con un diseño pensado en el uso de una única mano en una pantalla de móvil, facilitando la navegación por la página.
- Entre otros...

## Instrucciones de uso
Descargar la base de datos en la carpeta de Backend y subirla a localhost, luego hacer la conexión desde VSCode al servidor en el que haya subido la base de datos
Se recomiendo abrir 2 terminales; uno para backend y otro para frontend. Se debe inicializar el backend primero (Aunque la página funciona igual, pero se recomienda).

### Instrucciones Backend
- cd backend
- npm install
- node server.js

### Instrucciones Frontend
- cd ionicnaturalezapp
- npm install
- ionic serve
