let myLibrary = []
const btn = document.querySelector('#addBookButton')
const container = document.querySelector('#bookList')
const removeBtn = document.querySelector('.remove-button')
btn.addEventListener('click', addBookToLibrary)
removeBtn.addEventListener('click', removeBook)



//book code from written notes
function Book(title, author, numPages, hasBeenRead){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.index = null
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

function createBook(item) {
    let newBook = document.createElement('div')
        newBook.classList.add('book')
        newBook.classList.add(`index${item.index}`)

        let newBookTitle = document.createElement('h2')
        newBookTitle.textContent = `${item.title}`

        let newBookAuthor = document.createElement('p')
        newBookAuthor.textContent = item.author

        let newBookPages = document.createElement('p')
        newBookPages.textContent = `Num pages is ${item.numPages}`

        let newBookRead = document.createElement('p')
        newBookRead.textContent = item.hasBeenRead()
        
        let removeBook = document.createElement('button')
        removeBook.classList.add('remove-button')
        removeBook.textContent = "Remove"
        removeBook.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(item), 1)
            displayBooks()
        })

        newBook.appendChild(newBookTitle)
        newBook.appendChild(newBookAuthor)
        newBook.appendChild(newBookPages)
        newBook.appendChild(newBookRead)
        newBook.appendChild(removeBook)

        container.appendChild(newBook)
}

function displayBooks() {
    container.innerHTML = ""
    for(let i = 0; i < myLibrary.length; i++){
        
        createBook(myLibrary[i])
        
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
    newBook.index = myLibrary.length
    myLibrary.push(newBook)
    displayBooks()
}

function removeBook(e) {
    e.preventDefault()

}