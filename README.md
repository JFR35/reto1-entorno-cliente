# Sistema de Gestión de Libros

Este proyecto es un sistema de gestión de libros desarrollado en Node.js. Permite a los usuarios requisitos funcionales solicitados como:  agregar, listar y buscar libros, así como calcular el precio total y aplicar descuentos.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **readline-sync**: Paquete para la entrada de datos por consola en Node.js.
- **ES6 Modules**: Para la modularización del código.

## Herramientas

- **Visual Studio Code**: Editor de código.
- **Git**: Control de versiones.
- **npm**: Gestión de paquetes para agregar dependencias.

## Estructura del Proyecto

- **/models**: Modelos de datos (`Book` y `Library`).
- **/services**: Servicios que manejan la lógica del negocio (libros y descuentos).
- **/controllers**: Controladores que gestionan la interacción entre el usuario y los servicios.
- **/uses-cases**: Casos de uso para la lógica de aplicación (opcional, pueden estar en los controladores).
- **main.mjs**: Archivo principal que inicia la aplicación.

## Mejoras Futuras

- Implementar pruebas unitarias.
- Añadir persistencia de datos (por ejemplo, usando una base de datos).
- Mejorar la interfaz de usuario (UI) si se decide crear una versión web.
- Implementar un sistema de autenticación y autorización para proteger las operaciones.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `node mjs/main.mjs` para iniciar la aplicación.

