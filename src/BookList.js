import React, { Component } from 'react';
import Book from './Book'
import { shelfTitles } from './Shelf'
import * as BooksAPI from './BooksAPI'

export default class BookList extends Component {
  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  state = {
    books: [],
  }

  filterByShelf = (books, shelfName) => (books.filter((book) => book.shelf === shelfName));

  updateBookShelf = (book, shelf) => {
    if (shelf !== 'none') {
      BooksAPI.update(book, shelf).then((shelves) => {
        let currentBooks = this.state.books
        Object.keys(shelfTitles()).forEach(shelfTitle => {
          shelves[shelfTitle].forEach(bookId => {
            currentBooks.forEach(currentBook => {
              if (currentBook.id === bookId) {
                currentBook.shelf = shelfTitle
              }
            })
          })
        })
        this.setState({ books: currentBooks });
      })
    }
  };

  render() {
    const { books } = this.state
    const { onSearchPage } = this.props
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
                        {this.filterByShelf(books, shelf).map((book) => (
                          <Book book={book} key={book.id} onUpdateShelf={this.updateBookShelf} />
                        ))}
                      </ol>
                    </div>
                  </div>)
                )}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => onSearchPage(true)}>Add a book</a>
            </div>
          </div>
    );
  }
}
