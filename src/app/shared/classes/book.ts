export class Book {
  name: string;
  author: string;
  authorAvatar: string;
  description: string;
  likes: number;

  constructor(name, author, description, likes = 0, authorAvatar?) {
    this.name = name;
    this.author = author;
    this.description = description;
    this.likes = likes;
    this.authorAvatar = authorAvatar;
  }
}

export const BOOKS_MOK: Array<Book> = [
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
];
