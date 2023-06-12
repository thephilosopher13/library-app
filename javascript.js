let myLibrary = [];

// Variables relating to table creation, editing and clearing
const table = document.getElementById('libraryTable');
const tbody = table.querySelector('tbody');
const getRecentlyCreatedBook = myLibrary[myLibrary.length - 1];
const rowCreator = document.createElement('tr')
const cellCreator = document.createElement('td');
const buttonCreator = document.createElement('button');



// Variables for searching for a certain object
const recentlyCreatedBook = books[books.length - 1]
const bookIndex = myLibrary.indexOf()

    function createCell(property, content) {
        const newCell = cellCreator.cloneNode();
        newCell.textContent = content;
        newCell.classList.add(property);
        return newCell;
    }

    function createButton(whatButtonDoes, clickHandler) {
        const button = buttonCreator.cloneNode();
        button.textContent = whatButtonDoes;
        button.addEventListener('click', clickHandler)
    }

    // functionality for button to toggle the hasRead property
    function toggleReadStatus(book, row, hasRead, array, index) {
        book.hasRead = !hasRead;
        row.querySelector('.hasRead').textContent = book.hasRead ? 'Yes' : 'No';
        array[index].hasRead = book.hasRead;
    } 

    //functionality for button that deletes the row
    function deleteBook(row, index) {
        row.remove();
        myLibrary.splice(index, 1)
    }


    function addBooktoLibrary(book) {
        myLibrary.push(book);
    }

    // functionality for button to toggle the hasRead property

    function addRecentlyCreatedBookToTable(book) {
        const newRow = rowCreator.cloneNode();

        newRow.appendChild(this.createCell(book.title));
        newRow.appendChild(this.createCell(book.author));
        newRow.appendChild(this.createCell(book.pages));
        newRow.appendChild(this.createCell(book.hasRead ? 'Yes' : 'No'));

        newRow.appendChild(this.createButton('Toggle Read Status', () => toggleReadStatus(book, newRow, book.HasRead, myLibrary, myLibrary.indexOf(book))));
        newRow.appendChild(this.createButton('Edit', none));
        newRow.appendChild(this.createButton('Delete', () => deleteBook(newRow, myLibrary.indexOf(book))));
        tbody.appendChild(newRow);
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



