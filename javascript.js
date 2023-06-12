let myLibrary = [];

// Variables relating to table creation, editing and clearing
const table = document.getElementById('libraryTable');
const tbody = table.querySelector('tbody');
const rowCreator = document.createElement('tr')
const cellCreator = document.createElement('td');
const buttonCreator = document.createElement('button');
const checkboxCreator = document.createElement('input');
const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $pages = document.querySelector('#pages');
const $hasRead = document.querySelector('#hasRead');


function Book(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages
        this.hasRead = hasRead;

        this.toString = function() {
            return `Book: ${this.title} by ${this.author} with ${this.pages} pages. Book read: ${this.hasRead}` ;
          };
      }

// Variables for searching for a certain object
const recentlyCreatedBook = myLibrary[myLibrary.length - 1]
const bookIndex = myLibrary.indexOf()

function createCell(content) {
    const newCell = cellCreator.cloneNode();
    newCell.textContent = content;
    return newCell;
}

function createButton(whatButtonDoes, clickHandler) {
    const button = buttonCreator.cloneNode();
    button.textContent = whatButtonDoes;
    button.clasList.add('tableButton')
    button.addEventListener('click', clickHandler)
    return button;
}

function createCheckboxCell(checked, book, index) {
    const cell = cellCreator.cloneNode();
    const checkbox = checkboxCreator.cloneNode();
    checkbox.type = 'checkbox'
    checkbox.checked = checked;
    checkbox.classList.add('hasRead')

    checkbox.addEventListener('change', (e) => {
        const isChecked = e.target.checked
        book.hasRead = isChecked;
        myLibrary[index].hasRead = isChecked;
        console.log(myLibrary);
    });

    cell.appendChild(checkbox);
    return cell;
}

//functionality for button that deletes the row
function deleteBook(row, index) {
    row.remove();
    myLibrary.splice(index, 1)
}


function addBookToLibrary(title, author, pages, hasRead) {
    let newBook = new Book(title, author, pages, hasRead);
    console.log(newBook);
    myLibrary.push(newBook);

    addRecentlyCreatedBookToTable();
};

// functionality for button to toggle the hasRead property

function addRecentlyCreatedBookToTable() {
    const newRow = rowCreator.cloneNode();
    const book = myLibrary[myLibrary.length - 1];
    
    newRow.appendChild(createCell(book.title,));
    newRow.appendChild(createCell(book.author));
    newRow.appendChild(createCell(book.pages));
    newRow.appendChild(createCheckboxCell(book.hasRead, book, myLibrary.indexOf(book)));

    const deleteButtonCell = cellCreator.cloneNode();
    
    deleteButtonCell.appendChild(createButton('Delete', () =>
    deleteBook(newRow, myLibrary.indexOf(book))
    ));

    newRow.appendChild(deleteButtonCell)
    tbody.appendChild(newRow);
    }



document.getElementById('addBookForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // form values retrieval
    let titleFromForm = $title.value;
    let authorFromForm = $author.value;
    let pageFromForm = $pages.value;
    let hasReadFromForm = $hasRead.checked;

    addBookToLibrary(titleFromForm, authorFromForm, pageFromForm, hasReadFromForm);
});

console.log(myLibrary)

