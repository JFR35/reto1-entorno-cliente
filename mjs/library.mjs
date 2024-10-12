// Clase librería que simula persistencia de una bbdd con un array
export class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        return this.books;
    }

    findByTitle(title) {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    }

    calculateTotalPrice() {
        return this.books.reduce((total, book) => total + book.price, 0);
    }

    applyDiscount(discountPercentage) {
        const totalPrice = this.calculateTotalPrice();
        const discountAmount = (totalPrice * discountPercentage) / 100;
        return totalPrice - discountAmount;
    }
}
