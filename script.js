const myLibrary = [];

const addBook = document.querySelector('.add-book');
const showDialog = document.getElementById('dialog');
const confirmBtn = document.getElementById('confirmBtn');
const authorName =  document.getElementById('author');
const titleBook = document.getElementById('title');
const numPages = document.getElementById('numPages');
const statusBook = document.getElementById('status');

// Constructor for books
function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

// Push new books to array
function addBookToLibrary() {
    let book = new Book(authorName.value, titleBook.value, numPages.value, statusBook.value);
    myLibrary.push(book);
    clearVars();
    console.log(myLibrary);
}

function createBook() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = "";
    myLibrary.forEach((book)=> {

        // Create card
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        mainContent.append(newCard);

        // Get properties
        let cardTitle = book.title;
        let cardAuthor = book.author;
        let cardPages = book.pages;
        let cardStatus = book.status;

        newCard.append(
            cardTitle,
            cardAuthor,
            cardPages,
            cardStatus
        )
    })

}

// Open modal
addBook.addEventListener("click", () => showDialog.showModal());

// Confirm button modal to submit user input
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    showDialog.close();
    addBookToLibrary();
    createBook();
})

// Clear modal everytime
function clearVars() {
    authorName.value = '';
    titleBook.value = '';
    numPages.value = '';
}