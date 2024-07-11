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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
