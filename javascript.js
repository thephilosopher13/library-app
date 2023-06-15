let myLibrary = [];

const addBookForm = document.getElementById('addBookForm');

class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages
        this.hasRead = hasRead;

        this.toString = function() {
            return `Book: ${this.title} by ${this.author} with ${this.pages} pages. Book read: ${this.hasRead}` ;
          };
      }

}

const tableCreator = (() => {

    const table = document.getElementById('libraryTable');
    const tbody = table.querySelector('tbody');
    const rowCreator = document.createElement('tr')
    const cellCreator = document.createElement('td');
    const buttonCreator = document.createElement('button');
    const checkboxCreator = document.createElement('input');

    const _createCell = (content)  => {
        const newCell = cellCreator.cloneNode();
        newCell.textContent = content;
        return newCell;
    }

    const _createButton = (whatButtonDoes, clickHandler) => {
        const button = buttonCreator.cloneNode();
        button.textContent = whatButtonDoes;
        button.classList.add('tableButton')
        button.addEventListener('click', clickHandler)
        return button;
    }

    const _createCheckboxCell = (checked, book, index) => {
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

    function addRecentlyCreatedBookToTable() {
        const newRow = rowCreator.cloneNode();
        const book = myLibrary[myLibrary.length - 1];
        
        newRow.appendChild(_createCell(book.title,));
        newRow.appendChild(_createCell(book.author));
        newRow.appendChild(_createCell(book.pages));
        newRow.appendChild(_createCheckboxCell(book.hasRead, book, myLibrary.indexOf(book)));
    
        const deleteButtonCell = cellCreator.cloneNode();
        
        deleteButtonCell.appendChild(_createButton('Delete', () =>
        libraryFunctions.deleteBook(newRow, myLibrary.indexOf(book))
        ));
    
        newRow.appendChild(deleteButtonCell)
        tbody.appendChild(newRow);
        }

    return {
        addRecentlyCreatedBookToTable,
    }


})();

const libraryFunctions = (() => {

    const addBookToLibrary = (title, author, pages, hasRead) => {
        let newBook = new Book(title, author, pages, hasRead);
        console.log(newBook);
        myLibrary.push(newBook);
    
        tableCreator.addRecentlyCreatedBookToTable();
    };

    function deleteBook(row, index) {
        row.remove();
        myLibrary.splice(index, 1)
    }

    return {
        addBookToLibrary,
        deleteBook
    }

})();


// functionality for button to toggle the hasRead property

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // form values retrieval
    let titleFromForm = document.querySelector('#title').value;
    let authorFromForm = document.querySelector('#author').value;
    let pageFromForm = document.querySelector('#pages').value;
    let hasReadFromForm = $$hasRead = document.querySelector('#hasRead').checked;

    libraryFunctions.addBookToLibrary(titleFromForm, authorFromForm, pageFromForm, hasReadFromForm);
});
