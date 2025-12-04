// Book Class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isIssued = false;
        this.issueDate = null;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            this.issueDate = new Date();
            console.log(`Book Issued: ${this.title} on ${this.issueDate}`);
        }
        else {
            console.log(`Book already issued!`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            let returnDate = new Date();
            console.log(`Book Returned: ${this.title} on ${returnDate}`);
            this.issueDate = null;
        } else {
            console.log(`This book was not issued!`);
        }
    }

    checkAvailability() {
        return this.isIssued ? "Not Available" : "Available";
    }
}

// Library Class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book Added: ${book.title}`);
    }

    showBooks() {
        console.log("Library Books List:");
        this.books.forEach((book, index) => {
            console.log(
                `${index + 1}. ${book.title} by ${book.author} | Status: ${book.checkAvailability()}`
            );
        });
    }
}

// Create Library object
const library = new Library();

// Add Books
library.addBook(new Book("JavaScript Basics", "John Doe"));
library.addBook(new Book("Learning React", "Facebook Team"));

// Display All Books
library.showBooks();

// Issue Book
library.books[0].issueBook();

// Check Availability after issuing
library.showBooks();

// Return Book
library.books[0].returnBook();

// Show again
library.showBooks();