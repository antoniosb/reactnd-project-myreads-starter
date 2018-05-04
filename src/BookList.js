import React, { Component } from 'react';
import Book from './Book';
import { shelfTitles, shelfTitlesKeys } from './Shelf';
import { Link } from 'react-router-dom';

export default class BookList extends Component {
  filterByShelf = (books, shelfName) => (books.filter((book) => book.shelf === shelfName));

  render() {
    const { onUpdateShelf, books } = this.props
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelfTitlesKeys().map((shelf) => (
                  <div className="bookshelf" key={shelf}>
                    <h2 className="bookshelf-title">
                      {shelfTitles()[shelf]}
                    </h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.filterByShelf(books, shelf).map((book) => (
                          <Book book={book} key={book.id} onUpdateShelf={onUpdateShelf} />
                        ))}
                      </ol>
                    </div>
                  </div>)
                )}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"> Add a book</Link>
            </div>
          </div>
    );
  }
}
