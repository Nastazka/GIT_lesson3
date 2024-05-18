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



///////////// ЗАДАНИЕ 2 /////////////

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const reviewsListEl = document.querySelector('.reviews-list');
const reviewFormEl = document.querySelector('.review-form');

function addReview(reviewText) {
    if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error('Длина отзыва должна быть от 50 до 500 символов.');
    }

    const newReviewEl = document.createElement('div');
    newReviewEl.classList.add('review');
    newReviewEl.textContent = reviewText;

    reviewsListEl.appendChild(newReviewEl);
}

reviewFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const reviewText = event.target.elements.review.value;

    try {
        addReview(reviewText);
    } catch (error) {
        alert(error.message);
    }
});

// Загрузка начальных данных
initialData.forEach((product) => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productEl.innerHTML = <h3>${product.product}</h3>;

    product.reviews.forEach((review) => {
        const reviewEl = document.createElement('div');
        reviewEl.classList.add('review');
        reviewEl.textContent = review.text;

        productEl.appendChild(reviewEl);
    });

    reviewsListEl.appendChild(productEl);
});