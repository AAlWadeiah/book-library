const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      read ? "read it" : "not read yet"
    }`;
  };
}

function addBookToLibrary() {
  //   console.log(modalForm);
  //   console.log(closeBtn);
  //   console.log(submitBtn);
  modalForm.showModal();
  closeBtn.addEventListener("click", () => {
    modalForm.close();
  });
  let title;
  let author;
  let pages;
  //   alert("Add a new book by entering: title, author, number of pages");
  //   title = prompt("Title");
  //   author = prompt("Author");
  //   pages = prompt("Number of pages");
  myLibrary.push(new Book(title, author, pages, false));
  updateLibrary();
}

function updateLibrary() {
  const libShelf = document.querySelector("#library-shelf");
  libShelf.innerHTML = "";
  let books = Array.from(myLibrary).map((bObj, i) => {
    const container = document.createElement("div");
    container.classList.toggle("book");

    const title = document.createElement("h3");
    title.classList.toggle("title");
    title.innerText = bObj.title;

    const author = document.createElement("p");
    author.classList.toggle("author");
    author.innerText = bObj.author;

    const pageCount = document.createElement("p");
    pageCount.classList.toggle("page-count");
    pageCount.innerText = `${bObj.pages} pages`;

    container.append(title, author, pageCount);

    libShelf.appendChild(container);

    console.log(bObj.info());
  });
}

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", "295", false));
myLibrary.push(new Book("Moby-Dick", "Herman Melville", "720", false));
myLibrary.push(new Book("Frankenstein", "Mary Shelley", "317", false));
updateLibrary();

const modalForm = document.querySelector("#new-book-modal");
const closeBtn = document.querySelector("#new-book-modal > .close-btn");
const submitBtn = document.querySelector("#book-submit-btn");
const newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener("click", addBookToLibrary);
