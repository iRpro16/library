const addBook = document.querySelector('.add-book');
const showDialog = document.getElementById('dialog');
const confirmBtn = document.getElementById('confirmBtn');
const authorName =  document.getElementById('author');
const titleBook = document.getElementById('title');
const pages = document.getElementById('numPages');
const statusBook = document.getElementById('status');
const myLibrary = [];

function Book(author, title, numPages, status) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.status = status;
}

function addBookToLibrary(author, title, numPages, status) {
    let book = new Book(author.value, title.value, numPages.value, status);
    myLibrary.push(book);
    console.log(myLibrary)

}

addBook.addEventListener("click", () => showDialog.showModal());
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showDialog.close();
    addBookToLibrary(authorName, titleBook, pages, statusBook);
})