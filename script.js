//Задание 1

class Library {
    #books = [];
    
constructor(initialBooks = []) {
    if (initialBooks.length > 0) {
    const uniqueBooks = new Set(initialBooks);
    if (uniqueBooks.size !== initialBooks.length) {
        throw new Error('Список книг содержит дубликаты.');
    }
    this.#books = initialBooks;
    }
}

get allBooks() {
    return this.#books;
}

addBook(title) {
    if (this.#books.includes(title)) {
    throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
    }
    this.#books.push(title);
}

removeBook(title) {
    const bookIndex = this.#books.indexOf(title);
    if (bookIndex === -1) {
    throw new Error(`Книга с названием "${title}" не найдена в библиотеке.`);
    }
    this.#books.splice(bookIndex, 1);
}

hasBook(title) {
    return this.#books.includes(title);
}
}

const library = new Library(['Война и мир', 'Преступление и наказание', 'Идиот']);
//console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Идиот']

library.addBook('Братья Карамазовы');
//console.log(library.allBooks); // ['Война и мир', 'Преступление и наказание', 'Идиот', 'Братья Карамазовы']

library.removeBook('Преступление и наказание');
console.log(library.allBooks); // ['Война и мир', 'Идиот', 'Братья Карамазовы']

console.log(library.hasBook('Война и мир')); // true
console.log(library.hasBook('Незнакомка')); // false