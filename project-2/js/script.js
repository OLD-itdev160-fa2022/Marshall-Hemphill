
// Add event listeners to nav and form buttons
var readingButton = document.getElementById('reading'),
    savedButton = document.getElementById('saved'),
    readButton = document.getElementById('read');

    readingButton.addEventListener('click', function() {
        displayList(readingList);
    });

    savedButton.addEventListener('click', function() {
        displayList(savedList);
    });

    readButton.addEventListener('click', function() {
        displayList(readList);
    });

var addButton = document.getElementById('add-icon');
var newBookForm = document.getElementById('new-book');
var submitButton = document.getElementById('submit-button');
var cancelButton = document.getElementById('cancel-button');

// Add event listeners for form control and adding a new book
addButton.addEventListener('click', toggleForm);

cancelButton.addEventListener('click', toggleForm);

submitButton.addEventListener('click', addBook);

// List of books by category
var readingList = [
    {name: 'Valen', author: 'Marshall Hemphill', genre: 'Fantasy', image: ''},
    {name: 'The Inquisition', author: 'Taran Matharu', genre: 'Fantasy', image: ''},
    {name: 'Peerless', author: 'David Kembell', genre: 'Fiction', image: ''}
];

var savedList = [
    {name: 'Aurora Kingdom', author: 'Marshall Hemphill', genre: 'Fantasy', image: ''},
    {name: 'The BattleMage', author: 'Taran Matharu', genre: 'Fantasy', image: ''},
    {name: 'Curious Minds', author: 'Some Gai', genre: 'Mystery', image: ''}
];

var readList = [
    {name: 'The Novice', author: 'Taran Matharu', genre: 'Fantasy', image: ''},
    {name: 'More Than This', author: 'Patrick Ness', genre: 'Fiction', image: ''},
    {name: 'The Giver', author: 'Lois Lowry', genre: 'Science Fiction', image: ''}
];

// Create the HTML for new books to be added
function createBookCard(name, author, genre, image) {
    var card = `
        <div class="card">
            <img src="${image}">
            <div class="card-info">
                <h2 class="title">${name}</h2>
                <p>By: ${author}</p>
                <p>Genre: ${genre}</p>
            </div>
        </div>
    `;

    return card;
}

// Displays the list of books bases on user selection
function displayList(list) {
    var documentList = document.getElementById('list-container');
    documentList.innerHTML = "";

    for (i = 0; i < list.length; i++) {

        if (list[i].image == '') {
            list[i].image = "images/blank-icon.jpeg";
        }

        documentList.innerHTML += createBookCard(list[i].name, list[i].author, list[i].genre, list[i].image);
    }
}


// Toggles the form display
function toggleForm() {
    newBookForm.classList.toggle('active');
}

// Adds a new book and pushes to the selected array category
// Closes the form
function addBook() {
    var newTitle = document.getElementById('name-input');
    var newAuthor = document.getElementById('author-input');
    var newGenre = document.getElementById('genre-input');

    var listSelection = document.getElementById('list-selection');

    var newBook = [{name: '', author: '', genre: '', image: ''}];

    newBook.name = newTitle.value;
    newBook.author = newAuthor.value;
    newBook.genre = newGenre.value;
    newBook.image = '';
    
    if (listSelection.value == "reading") {
        readingList.push(newBook);
        displayList(readingList);
    }

    if (listSelection.value == "saved") {
        savedList.push(newBook);
        displayList(savedList);
    }

    if (listSelection.value == "read") {
        readList.push(newBook);
        displayList(readList);
    }

    toggleForm();
}