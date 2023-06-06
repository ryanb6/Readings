let myLibrary = []

//book code from written notes
function Book(title, author, numPages, hasBeenRead){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.hasBeenRead = function(){
        if(hasBeenRead == true){
            return("has been read already!")
        }else{
            return("has not been read yet.")
        }
    }
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.numPages} pages, ${this.hasBeenRead()}`)
    }
}
const book1 = new Book('Heart of Darkness','Joseph Conrad',69,true)
const book2 = new Book('Melting Classroom','Junji Ito',82,false)
myLibrary.push(book1)
myLibrary.push(book2)

const container = document.querySelector('#bookList')
function displayBooks() {
    for(let i in myLibrary){
        let newBook = document.createElement('ul')
        newBook.textContent = `${myLibrary[i].title}`
        let newBookAuthor = document.createElement('li')
        newBookAuthor.textContent = myLibrary[i].author
        let newBookPages = document.createElement('li')
        newBookPages.textContent = myLibrary[i].numPages
        let newBookRead = document.createElement('li')
        newBookRead.textContent = myLibrary[i].hasBeenRead()
        newBook.appendChild(newBookAuthor)
        newBook.appendChild(newBookPages)
        newBook.appendChild(newBookRead)
        container.appendChild(newBook)
    }
}


const btn = document.querySelector('#addBookButton')
btn.addEventListener('click', function(e) {
    let newTitle = document.querySelector('#book_title').value
    let newAuthor = document.querySelector('#book_author').value
    let newNumPages = document.querySelector('#num_pages').value
    let newHaveRead = document.querySelector('#have_read').value
    let newBook = new Book(newTitle, newAuthor, newNumPages, newHaveRead)
    myLibrary.push(newBook)
    displayBooks()
})
//add a function to the script that adds a new book object into the array
function addBookToLibrary() {

}