let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayObject();
}

const cardCont = document.querySelector('.card-container');

function displayObject() {
    const para = document.createElement("p");
    para.classList.add('card');
    for (let book of myLibrary) {
        para.innerHTML = book.author + book.title + book.pages
    };
    cardCont.appendChild(para);
   
}

