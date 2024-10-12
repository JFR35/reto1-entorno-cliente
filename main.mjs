// Archivo principal para manejar la lógica del menú
import { question } from 'readline-sync';
import { Library } from './mjs/library.mjs';
import { addBook } from './mjs/uses-cases/addbook.mjs';
import { listBooks } from './mjs/uses-cases/listbooks.mjs';
import { findByTitle } from './mjs/uses-cases/findbytitle.mjs';
import { calculateTotalPrice } from './mjs/uses-cases/calculatetotalprice.mjs';
import { applyDiscount } from './mjs/uses-cases/applydiscount.mjs';

console.log('Bienvenido a tu nuevo sistema de gestión de libros');

const library = new Library();
let menu = 0;

while (menu !== 6) {
    console.log(`
        Selecciona la opción que necesites:
        1. Introducir un libro
        2. Listar todos los libros
        3. Buscar un libro por su título
        4. Calcular el precio total de los libros
        5. Aplicar descuento seleccionado
        6. Salir
    `);
    menu = parseInt(question('Selecciona una opción: '));

    switch (menu) {
        case 1:
            const title = question('Ingresa el título: ');
            const author = question('Ingresa el autor: ');
            const price = parseFloat(question('Ingresa el precio: '));
            addBook(library, author, title, price);
            console.log('Libro agregado correctamente.');
            break;

        case 2:
            console.log('Listar todos los libros: ');
            const books = listBooks(library);
            books.forEach(book => {
                console.log(`Autor: ${book.author}, Título: ${book.title}, Precio: $${book.price}`);
            });
            break;

        case 3:
            const searchTitle = question('Introduce el título a buscar: ');
            const foundBook = findByTitle(library, searchTitle);
            if (foundBook) {
                console.log(`Libro encontrado: Título: ${foundBook.title}, Autor: ${foundBook.author}, Precio: $${foundBook.price}`);
            } else {
                console.log('Libro no encontrado.');
            }
            break;

        case 4:
            const totalPrice = calculateTotalPrice(library);
            console.log(`El precio total de todos los libros es: $${totalPrice}`);
            break;
            
        case 5:
            const discount = parseFloat(question('Ingresa el porcentaje de descuento a aplicar: '));
            const discountedPrice = applyDiscount(library, discount);
            console.log(`El precio total después de aplicar un descuento del ${discount}% es: $${discountedPrice}`);
            break;

        case 6:
            console.log('Saliendo de la aplicación...');
            break;

        default:
            console.log('Opción no válida, por favor elige una opción del menú.');
    }
}
