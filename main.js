// UI
let myLibrary = []
const cardCont = document.querySelector('.card-container');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

// Book Constructor 
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Add book to library array
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    if (title !== "" && author !== "" && pages !== "" ) displayObject();
}

// Dispay object on screen
function displayObject() {
    modal.style.display = "none"
    container.style.opacity = "1"
    const para = document.createElement("div");
    para.classList.add('card');
    for (let book of myLibrary) {
        para.innerHTML = `<p>${book.title}</p>` +`<p>${book.author}</p>` + `<p>${book.pages}</p>`
    };
    cardCont.appendChild(para);
}

// Display Modal
function displayModal() {
    modal.style.display = "block"
    container.style.opacity = "0.2"
    title.value = ""
    author.value = ""
    pages.value = ""

}

// Close Modal
function closeModal() {
    container.style.opacity ="1"
    modal.style.display = "none"
}

function toggleRead() {
    const read = document.getElementById("read");
    if(read.value == 'Not read') {
        read.value = 'Read';
        read.style.background = 'lightgreen'
    } else if(read.value == 'Read') {
        read.value = "Not read"
        read.style.background = 'lightcoral'
    }
}




