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
  if (modalForm.returnValue === closeBtn.value) {
    console.log("Closed without entering anything");
  } else {
    const titleInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const pagesInput = document.querySelector("#pages-input");

    myLibrary.push(
      new Book(titleInput.value, authorInput.value, pagesInput.value, false)
    );
    updateLibrary();

    // Clear form
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
  }
}

function updateLibrary() {
  libShelf.innerHTML = "";
  let books = Array.from(myLibrary).map((bObj, i) => {
    const container = document.createElement("div");
    container.classList.toggle("book");
    container.dataset.index = i;

    const title = document.createElement("h3");
    title.classList.toggle("title");
    title.innerText = bObj.title;

    const author = document.createElement("p");
    author.classList.toggle("author");
    author.innerText = bObj.author;

    const pageCount = document.createElement("p");
    pageCount.classList.toggle("page-count");
    pageCount.innerText = `${bObj.pages} pages`;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.value = "remove";
    removeBtn.classList.toggle("base-btn");
    removeBtn.classList.toggle("remove-book-btn");

    const readBtn = document.createElement("button");
    readBtn.innerText = "Read It";
    readBtn.value = "read";
    readBtn.classList.toggle("base-btn");
    readBtn.classList.toggle("read-book-btn");

    container.append(title, author, pageCount, removeBtn, readBtn);

    libShelf.appendChild(container);

    // console.log(container);

    // console.log(bObj.info());
  });
}

function removeBook(bookNode) {
  let conf = confirm(
    `Are you sure you want to remove "${bookNode.firstElementChild.innerText}" from your library?`
  );
  if (conf) {
    myLibrary.splice(bookNode.dataset.index, 1);
    updateLibrary();
  }
}

function markAsRead(bookNode) {
  myLibrary[bookNode.dataset.index].read = true;
}

function shelfClickHandler(e) {
  let clicked = e.target.value;

  if (clicked === "remove") {
    removeBook(e.target.parentNode);
  } else if (clicked === "read") {
    markAsRead(e.target.parentNode);
  }
}

const modalForm = document.querySelector("#new-book-modal");
const closeBtn = document.querySelector("#new-book-form > .close-btn");
const submitBtn = document.querySelector("#book-submit-btn");
const newBookBtn = document.querySelector("#new-book-btn");

const libShelf = document.querySelector("#library-shelf");

newBookBtn.addEventListener("click", (e) => {
  modalForm.showModal();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalForm.close(closeBtn.value);
});

modalForm.addEventListener("close", addBookToLibrary);

libShelf.addEventListener("click", shelfClickHandler);

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", "295", false));
myLibrary.push(new Book("Moby-Dick", "Herman Melville", "720", false));
myLibrary.push(new Book("Frankenstein", "Mary Shelley", "317", false));
updateLibrary();
