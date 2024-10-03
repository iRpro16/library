const addBook = document.querySelector('.add-book');
const showDialog = document.getElementById('dialog');
const confirmBtn = document.getElementById('confirmBtn');
const authorName =  document.getElementById('author');
const titleBook = document.getElementById('title');
const pages = document.getElementById('numPages');
const statusBook = document.getElementById('status');
const myLibrary = [];

// Constructor for books
function Book(author, title, numPages, status) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.status = status;
}

// Push new books to array
function addBookToLibrary() {
    let book = new Book(authorName.value, titleBook.value, pages.value, statusBook.value);
    myLibrary.push(book);
    clearVars();
    console.log(myLibrary)
}

// Open modal
addBook.addEventListener("click", () => showDialog.showModal());

// Confirm button modal to submit user input
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showDialog.close();
    addBookToLibrary();
})

// toggle button
function toggleLabel() {
    if (statusBook.textContent === 'Not Read') {
        statusBook.textContent = 'Read';
        statusBook.value = 'Read';
        statusBook.style.backgroundColor = 'lightgreen';
    } else {
        statusBook.textContent = 'Not Read';
        statusBook.value = 'Not Read';
        statusBook.style.backgroundColor = '#FFCCCB';
    }
}

// Clear modal everytime
function clearVars() {
    authorName.value = '';
    titleBook.value = '';
    pages.value = '';
    statusBook.value = 'Not Read';
    statusBook.style.backgroundColor = "#FFCCCB";
}