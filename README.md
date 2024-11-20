# NaturalezApp

## Descripción
NaturalezApp es una aplicación web/móvil que dispondrá de información sobre parques y reservas naturales dentro de Chile (inicialmente de la V región), noticias y tips sobre el medioambiente.

## Funcionalidades
- **Ver entradas destacadas dentro de la página Home**
  
La aplicación muestra entradas de Parques, Fauna, Flora y Noticias de maneras aleatoria para ingresar a ellas.

- **Ver las áreas naturales disponibles en Chile**
  
La aplicación mostrará una lista de los parques naturales dentro de la base de datos.

- **Ver información acerca de los parques naturales de Chile**
  
La plaición mostrará la flora y/o fauna presente dentro del parque, una descripción breve sobre el lugar e imágenes del lugar.
  

- **Buscar parques dentro de la aplicación**
  
La aplicación permitirá buscar áreas naturales como reservas o parques naturales, jardines botánicos, cerros, entre otros para poder ver su información asociada ingresando su nombre.

- **Realizar comentarios sobre los lugares a través de su cuenta de usuario**
  
La aplicación contará con la opción de realizar y ver comentarios sobre lás áreas, creando un espacio de interacción entre usuarios, mostrando el nombre de usuario, la fecha en la que fue realizada y el comentario en sí.

- **Ver la flora disponible en la base de datos**
  
La aplicación permitirá ver la flora disponible dentro de la base de datos

- **Ver información de la flora**
  
Cada flora disponible con una página dinámica, mostrando su información asociada

- **Ver la fauna y los lugares en los que se encuentra**
  
La aplicación permitirá ver la fauna disponible dentro de la base de datos

- **Ver información de la flora**
  
Cada fauna disponible con una página dinámica, mostrando su información asociada

- **Recomendar un área natural**
  
La aplicación le dará al usuario lugar de entre todos los posibles para recomendárselo, llevándolo a la página asociada

- **Mostrar noticias relacionadas al cuidado del medioambiente como el cambio climático o novedades de algún área**
  
La aplicación tendrá un apartado de noticias que mostrará las principales novedades sobre la actualidad medioambiental

## Cuenta de usuario
  
La aplicaión cuenta con un registro de cuenta e inicio de sesión para ser utilizada, utilzando localstorage y rutas protegidas.


## Backend

La aplicación cuenta con un backend, dedicado a gestionar los datos y las solicitudes realizadas por parte del usuario y frontend, además cuenta con una base de datos estructurados que permite obtener la información.

## Conexión entre datos y lógica

Los datos se encuentran distribuidos según la lógica de negocio de una aplicación enfocada a ser informativa al usuario, contando con interfaces personalizadas que muestran la información relevante desde la base de datos. Además, se realizan las verificaciones necesarias para mantener la integridad de datos, por ejemplo no permitir dos cuentas con un mismo correo, no permitir la repetición de datos dentro de la base de datos.

## Conexión entre backend y frontend

La conexión a ésta se realizó en base a API's REST para garantizar una conexión estable y escalable mediante Node.js y Express.js

## Seguridad

- **Autenticación de usuario mediante correo y contraseña**

- **Encriptado de contraseñas**

- **Encriptado de datos de la base de datos mediante dotenv**

- **Autorización mediante roles**

- **Utilización de JWToken para el reconocimiento**

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
