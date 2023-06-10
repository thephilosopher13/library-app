let myLibrary = [];


//functions for adding and removing new Books from library

function addBookToLibrary(book) {
    myLibrary.push(book);
};

const table = document.getElementById('libraryTable');



class Library {
    function addBookToLibrary(newBook) {
        myLibrary.push(newBook);
      }
    
}

document.getElementById('addBookForm').addEventListener(submit, (e) => {
    e.preventDefault();

    // form values retrieval
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let hasRead = document.getElementById('hasRead').checked;

    var newBook = new addBook(title, author, pages, hasRead);

    addBookToLibrary(newBook)
});



