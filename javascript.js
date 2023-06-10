let myLibrary = [];

// Variables relating to table creation, editing and clearing
const table = document.getElementById('libraryTable');
const tbody = table.querySelector('tbody');
const getRecentlyCreatedBook = myLibrary[myLibrary.length - 1];
const rowCreator = document.createElement('tr')
const cellCreator = document.createElement('td');


// Variables for searching for a certain object
var recentlyCreatedBook = books[books.length - 1]

class Library {
    addBooktoLibrary(book) {
        myLibrary.push(book);
    }
    
    createCell(property, content) {
        const newCell = cellCreator.cloneNode();
        newCell.textContent = content;
        newCell.classList.add(property);
        return newCell;
    }

    // functionality for button to toggle the hasRead property
    toggleReadStatus(book, row, hasRead) {
        book.hasRead = !hasRead;
        newRow.querySelector('.hasRead').textContent = book.hasRead ? 'Yes' : 'No';
    } 

    addRecentlyCreatedBookToTable(book) {
        const newRow = rowCreator.cloneNode();

        newRow.appendChild(this.createCell(book.title));
        newRow.appendChild(this.createCell(book.author));
        newRow.appendChild(this.createCell(book.pages));
        newRow.appendChild(this.createCell(book.hasRead ? 'Yes' : 'No'));

        tbody.appendChild(newRow);

    }




}

class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages
        this.hasRead = hasRead;
      }
};


document.getElementById('addBookForm').addEventListener(submit, (e) => {
    e.preventDefault();

    // form values retrieval
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let hasRead = document.getElementById('hasRead').checked;

    var newBook = new addBook(title, author, pages, hasRead);

    addBookToLibrary(newBook)
    addRecentlyCreatedBookToTable(getRecentlyCreatedBook)
});



