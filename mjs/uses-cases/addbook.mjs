// En este archivo se añade un libro

import { Book } from '../book.mjs';

export function addBook(library, author, title, price) {
    const newBook = new Book(author, title, price);
    library.addBook(newBook);
}
