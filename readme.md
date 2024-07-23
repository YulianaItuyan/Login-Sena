# Proyecto de Autenticación de Usuarios con Node.js y MySQL

Este proyecto es una aplicación web básica de autenticación de usuarios que permite el registro, inicio de sesión de los usuarios. Está construida utilizando Node.js, Express, MySQL y EJS.

## Características

- **Registro de Usuarios**: Los usuarios pueden registrarse proporcionando su cédula, nombre, apellido, contraseña y correo electrónico.
- **Inicio de Sesión**: Los usuarios registrados pueden iniciar sesión con su cédula y contraseña.
- **Pruebas Automáticas**: El proyecto incluye pruebas automáticas para verificar la funcionalidad de las rutas de registro e inicio de sesión utilizando `supertest` y `mocha`.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo en JavaScript para el backend.
- **Express**: Framework de Node.js para construir aplicaciones web.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **EJS**: Motor de plantillas para generar HTML dinámico en el servidor.
- **Supertest**: Herramienta para realizar pruebas HTTP.
- **Mocha**: Framework de pruebas para JavaScript.
- **Babel**: Transpiler para usar ES6+ en Node.js.


### Configuración del Proyecto

npm install

Abrir MySql crear la database y esta tabla para que arranque la aplicacion

CREATE TABLE usuarios (
    cedula VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    correo VARCHAR(100),
    password VARCHAR(255)
);

### Pruebas
npm test
subira los datos a mysql, si quieres repetir las pruebas deberas cambiar los datos del test porque dara error si el usuario ya existe.

En postman se puede probar tambien mandando en el metodo post con la ruta de /validar
por ejemplo: {
  "ced": "0987654321",
  "nom": "Maria",
  "apell": "Gomez",
  "pass": "newsecurepassword",
  "correo": "maria.gomez@nuevoemail.com"
}
