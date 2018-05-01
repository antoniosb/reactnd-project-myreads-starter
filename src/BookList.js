import React, { Component } from 'react';

export default class BookList extends Component {
  shelfTitles = () => ({
    wantToRead: 'Want To Read',
    currentlyReading: 'Currently Reading',
    read: 'Read'
  });

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
                {Object.keys(this.shelfTitles()).map((shelf) => (
                  <div className="bookshelf" key={shelf}>
                    <h2 className="bookshelf-title">
                      {this.shelfTitles()[shelf]}
                    </h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {shelfedBooks[shelf].map((book) => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                  <select defaultValue={shelf}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors.join(', ')}</div>
                            </div>
                          </li>
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
