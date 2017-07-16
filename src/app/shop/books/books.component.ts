import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-shop-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books;
  constructor() { }

  ngOnInit() {
    this.books = [
      {
        name: 'Watchman',
        author: 'Alan Moore',
        authorAvatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2010/09/alan-moore1.jpg',
        description: 'This is the best comics',
        likes: 250
      },
      {
        name: 'Watchman',
        author: 'Alan Moore',
        authorAvatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2010/09/alan-moore1.jpg',
        description: 'This is the best comics',
        likes: 250
      },
      {
        name: 'Watchman',
        author: 'Alan Moore',
        authorAvatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2010/09/alan-moore1.jpg',
        description: 'This is the best comics',
        likes: 250
      },
      {
        name: 'Watchman',
        author: 'Alan Moore',
        authorAvatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2010/09/alan-moore1.jpg',
        description: 'This is the best comics',
        likes: 250
      }
    ]
  }

  public likePlus(book) {
    book.likes += 1;
  }

}
