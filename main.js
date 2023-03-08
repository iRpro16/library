// UI
let myLibrary = []
const cardCont = document.querySelector('.card-container');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

// Book Constructor 
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

// Add book to library array
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    if (title !== "" && author !== "" && pages !== "" ) displayObject();
}

// Dispay object on screen
function displayObject() {
    modal.style.display = "none"
    container.style.opacity = "1"
   
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('toggle-btn');
    const card = document.createElement("div");
    card.classList.add('card');

    for (let book of myLibrary) {
        card.innerHTML = `<p>${book.title}</p>` +`<p>${book.author}</p>` + `<p>${book.pages}</p>` 
        toggleBtn.innerHTML = 'Not read'
    };

    cardCont.appendChild(card);
    card.appendChild(toggleBtn);
    card.style.borderTop = '8px solid lightcoral'

    toggleBtn.addEventListener('click', () => {
        if(toggleBtn.innerHTML == 'Not read') {
            toggleBtn.innerHTML = 'Read';
            toggleBtn.style.background = 'lightgreen'
            card.style.borderTop = '8px solid lightgreen'
    
        } else if(toggleBtn.innerHTML == 'Read') {
            toggleBtn.innerHTML = "Not read"
            toggleBtn.style.background = 'lightcoral'
            card.style.borderTop = '8px solid lightcoral'
        }
    })
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





