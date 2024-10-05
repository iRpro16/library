const myLibrary = [];

const addBook = document.querySelector('.add-book');
const showDialog = document.getElementById('dialog');
const confirmBtn = document.getElementById('confirmBtn');
const authorName =  document.getElementById('author');
const titleBook = document.getElementById('title');
const numPages = document.getElementById('numPages');
const statusBook = document.getElementById('status');
const cardCont = document.querySelector(".card-cont");

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
}


// Create book 
function createBook() {
    myLibrary.forEach((book, index) => {
        if (index === myLibrary.length - 1) {
            const newCard = document.createElement('div');
            newCard.classList.add('book-card');
            newCard.id = index;
            cardCont.append(newCard);

            // Get book properties
            const cardTitle = book.title;
            const cardAuthor = book.author;
            const cardPages = book.pages;
            const cardStatus = book.status;

            // Title
            const cardHeader = document.createElement('h3');
            cardHeader.classList.add('card-header');
            cardHeader.innerText = cardTitle;
            newCard.append(cardHeader);

            // Body
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            newCard.append(cardBody);

            // Body elements
            const authorElement = document.createElement('p');
            authorElement.innerText = `Author: ${cardAuthor}`;
            const pagesElement = document.createElement('p');
            pagesElement.innerText = `# of Pages: ${cardPages} pages`;

            // 
            if (cardStatus === "not read") {
                newCard.style.borderLeft = "10px solid red"
            } else {
                newCard.style.borderLeft = "10px solid green";
            }
            cardBody.append(
                authorElement,
                pagesElement
            )

            // Read button
            const cardStatusBtn = document.createElement('button');
            cardStatusBtn.classList.add('card-stat-button');
            cardStatusBtn.innerHTML = cardStatus;
            cardBody.append(cardStatusBtn);

            // Delete button
            const deleteBtnCont = document.createElement('div');
            deleteBtnCont.classList.add('delete-btn-cont');
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerHTML = 'Delete';
            deleteBtn.addEventListener('click', deleteCard);
            deleteBtnCont.append(deleteBtn);
            cardBody.append(deleteBtnCont);
        }
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

function deleteCard(e) {
    // Get the card ID (as a number)
    let cardId = parseInt(e.target.closest('.book-card').id);

    // Find the corresponding card element
    const cardEl = e.target.closest('.book-card');

    // Ensure cardEl is a child of cardCont before removing
    if (cardEl && cardCont.contains(cardEl)) {
        cardCont.removeChild(cardEl);
        myLibrary.splice(cardId, 1);
    }

    // Reassign IDs for the remaining cards
    const cards = document.querySelectorAll('.book-card');
    cards.forEach((card, index) => {
        card.id = index;
    });
}