// Función para calcular el precio total

export function calculateTotalPrice(library) {
    return library.listBooks().reduce((total, book) => total + book.price, 0);
}
