// Created book class that has title and author descriptors
class Book { 
    constructor(title, author){
      this.title = title;
      this.author = author;
    }
    describe(){
        return `${this.title} is written by ${this.author}`; //used template literals to print title and author
    }
}

class Menu { // created Menu class in order to have a menu the user can interact with
    constructor (){
        this.books = [];
        this.selectedBook = null;
    }
    start() { // created a start function with switch in order for code to be able to run w/e case matches what is being called 
        let selection = this.showMainMenuOptions();
        while (selection != '0') {
            switch (selection){
                case '1':
                    this.createBook();
                break;
                case '2':
                    this.viewBook(); 
                break;
                case '3':
                    this.deleteBook();
                break;
                default: 
                    selection = '0';
            }
        selection = this.showMainMenuOptions();
        }
      alert('Goodbye');  
    }
    showMainMenuOptions() { // created so that user can see all the options
        return prompt(`
        0) exit
        1) create new book
        2) view book
        3) delete book
        `);
    }

    
    createBook() { // created function for users to be able to add book titles and authors.
        let title = prompt('Enter name for new book');
        let author = prompt('Enter author for new book');
        let book = new Book(title, author);
        this.books.push(book);
        alert(`Book ${title} by ${author} created!`)
    }

    viewBook() { // allows user to view books if they know the index of the book
        let index = prompt('Enter index of book you wish to view');
        if (index >= 0 && index < this.books.length) {
            this.selectedBook = this.books[index];
            let description = `Book Title: ${this.selectedBook.title}\n`;
            description += `Book Author: ${this.selectedBook.author}\n`;
            alert(description);
        } 
    }
    
    deleteBook() { //give user to delete book of their choice using the index number
            let index = prompt('Enter index of book to delete');
            if (index >= 0 && index < this.books.length) {
                let bookToDelete = this.books[index];
                this.books.splice(index, 1);
                alert(`Book '${bookToDelete.title}' deleted.`);
            } else {
                alert('Invalid Index');
            }
    }

}
let menu = new Menu (); //created in order to run code
menu.start();