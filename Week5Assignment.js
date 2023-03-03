class Book { 
    constructor(title, author){
      this.title = title;
      this.author = author;
      this.genres = [];
    }
    describe(){
        return `${this.title} is written by ${this.author}`;
    }
}

class Genre {
    constructor(genreTitle){
        this.genreTitle = genreTitle;
        this.books = [];
    }
        addBook(book){
        if (book instanceof Book){
        this.books.push(book);
        } else {
          throw new Error(`Argument is not a Book`);
        }
    }
    describe() {
        return `${this.genreTitle} has ${this.books.length} books`
    }
}

class Menu {
    constructor (){
        this.books = [];
        this.selectedBook = null;
    }
    start() {
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
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new book
        2) view book
        3) delete book
        `);
    }

    
    createBook() {
        let title = prompt('Enter name for new book');
        let author = prompt('Enter author for new book');
        let book = new Book(title, author);
        this.books.push(book);
        alert(`Book ${title} created!`)
    }

    viewBook() {
        let index = prompt('Enter index of book you wish to view');
        if (index >= 0 && index < this.books.length) {
            this.selectedBook = this.books[index];
            let description = `Book Title: ${this.selectedBook.title}\n`;
            description += `Book Author: ${this.selectedBook.author}\n`;
            description += `Genres: \n`;
            for(let i = 0; i < this.selectedBook.genres.length; i++) {
                description += `${i + 0}) ${this.selectedBook.genres[i].genreTitle}\n`;
            }
            alert(description);
        } 
    }
    
    deleteBook() {
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
let menu = new Menu ();
menu.start();