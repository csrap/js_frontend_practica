


# Nodepop Frontend

Creación del frontend de una aplicación llamada NodePop

La apliación cuenta se conforma de la siguiente manera

## Página listado de anuncios

http://localhost:3000/index.html, esta funciona una vez que arrancamos con npm start el backend que se explicara mas adelante

Donde se van a detallar los anuncios de la siguiente forma:

- Foto
- Nombre
- Precio
- Compra o Venta

De igual manera se trabajan los estados de interfaz vacio(no hay anuncios),errores al cargar, carga y exito

## Detalle de anuncio

Se muestra el detalle de cada anuncio

- Foto
- Nombre
- Precio
- Compra o Venta

los estados de interfaz vacio(no hay anuncios),errores al cargar, carga y exito, aparte si el usuario es el creador del anuncio se activara el botón de borrar

## Crear un anuncio

Se requiere para la creación de un anuncio

- Url con la foto del anuncio
- Nombre del anuncio
- Precio
- Selección si es compra/venta
- Botón para crear el anuncio

los estados de interfaz vacio(no hay anuncios),errores al cargar, carga y exito, aparte si el usuario es el creador del anuncio se activara el botón de borrar

# Login

- Muestra un formulario solicitando nombre del usuario y contraseña

# Registro

- Se solicita un nombre de usuario, contraseña y confirmación de la contraseña

# Backend

El backend a utilizar será sparrest.js, basado en json-server, el cual nos ofrece un completo API
REST para simular un backend real.

Para hacerlo funcionar, únicamente hay que descargarse el código desde
https://github.com/kasappeal/sparrest.js y, dentro de la carpeta donde se aloja el código, instalar
las dependencias ejecutando:
npm i
Y para arrancar el servidor ejecutar:
npm start
Por defecto, arrancará el servidor en el puerto 8000, por lo que se podrá acceder a él a través de
http://127.0.0.1:8000/

- En la carpeta BackEnd se encuentra el DB.json para una prueba de los anuncios ya creados
