import React, { Component } from 'react';
import Book from './Book'
import { shelfTitles } from './Shelf'

export default class BookList extends Component {
  shelfBooks = (books) => ({
      wantToRead: this.filterByShelf(books, 'wantToRead'),
      currentlyReading: this.filterByShelf(books, 'currentlyReading'),
      read: this.filterByShelf(books, 'read')
  });

  filterByShelf = (books, shelfName) => (books.filter((book) => book.shelf === shelfName));

  render() {
    const { books } = this.props
    const shelfedBooks = this.shelfBooks(books)
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.keys(shelfTitles()).map((shelf) => (
                  <div className="bookshelf" key={shelf}>
                    <h2 className="bookshelf-title">
                      {shelfTitles()[shelf]}
                    </h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {shelfedBooks[shelf].map((book) => (
                          <Book book={book} key={book.id} />
                        ))}
                      </ol>
                    </div>
                  </div>)
                )}
              </div>
            </div>
          </div>
    );
  }
}
