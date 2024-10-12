// Módulo para búsqueda por título

export function findByTitle(library, title) {
    return library.listBooks().find(book => book.title.toLowerCase() === title.toLowerCase());
}
