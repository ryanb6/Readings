let myLibrary = []
const btn = document.querySelector('#addBookButton')
const container = document.querySelector('#bookList')
btn.addEventListener('click', addBookToLibrary)

//book code from written notes
function Book(title, author, numPages, hasBeenRead){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.hasBeenRead = function(){
        if(hasBeenRead == true){
            return("Read!")
        }else{
            return("Not read.")
        }
    }
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.numPages} pages, ${this.hasBeenRead()}`)
    }
}

function displayBooks() {
    container.innerHTML = ""
    for(let i in myLibrary){
        
        let newBook = document.createElement('div')
        newBook.classList.add('book')

        let newBookTitle = document.createElement('h2')
        newBookTitle.textContent = `${myLibrary[i].title}`

        let newBookAuthor = document.createElement('p')
        newBookAuthor.textContent = myLibrary[i].author

        let newBookPages = document.createElement('p')
        newBookPages.textContent = `Num pages is ${myLibrary[i].numPages}`

        let newBookRead = document.createElement('p')
        newBookRead.textContent = myLibrary[i].hasBeenRead()

        newBook.appendChild(newBookAuthor)
        newBook.appendChild(newBookPages)
        newBook.appendChild(newBookRead)
        container.appendChild(newBook)
    }
}

//add a function to the script that adds a new book object into the array
function addBookToLibrary(e) {
    e.preventDefault()
    let newTitle = document.querySelector('#book_title').value
    let newAuthor = document.querySelector('#book_author').value
    let newNumPages = document.querySelector('#num_pages').value
    let newHaveRead = document.querySelector('#have_read').checked
    let newBook = new Book(newTitle, newAuthor, newNumPages, newHaveRead)
    myLibrary.push(newBook)
    displayBooks()
}