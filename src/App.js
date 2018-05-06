import React from 'react'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import { shelfTitlesKeys } from './Shelf'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  state = {
    books: [],
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((shelves) => {
      let currentBooks = this.state.books
      const currentBookIds = currentBooks.map(book => book.id)
      if(!currentBookIds.includes(book.id)) {
        currentBooks.push(book)
      }
      if(shelf === 'none') {
        currentBooks = currentBooks.filter(currentBook => book.id !== currentBook.id)
      }
      shelfTitlesKeys().forEach(shelfTitle => {
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
  };

  currentBookShelves = () => {
    const currentBooks = this.state.books
    let bookShelves = {}
    currentBooks.forEach(book => {
      bookShelves[book.id] = book.shelf
    })
    return bookShelves
  };


  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            updateShelf={this.updateBookShelf}
            books={books} />
        )}/>
        <Route path="/search" render={() => (
          <BookSearch
            currentBookShelves={this.currentBookShelves}
            onUpdateShelf={this.updateBookShelf} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
