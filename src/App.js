import React from 'react'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import { shelfTitlesKeys } from './Shelf'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  state = {
    showSearchPage: false,
    books: [],
  }

  toggleSearchPage = (searchPageFlag) => {
    this.setState({ showSearchPage: searchPageFlag });
  }

  updateBookShelf = (book, shelf) => {
    if (shelf !== 'none') {
      BooksAPI.update(book, shelf).then((shelves) => {
        let currentBooks = this.state.books
        const currentBookIds = currentBooks.map(book => book.id)
        if(!currentBookIds.includes(book.id)) {
          currentBooks.push(book)
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
    }
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
        {this.state.showSearchPage ?
          <BookSearch
            currentBookShelves={this.currentBookShelves}
            onUpdateShelf={this.updateBookShelf}
            onSearchPage={this.toggleSearchPage} /> :
          <BookList
            onSearchPage={this.toggleSearchPage}
            onUpdateShelf={this.updateBookShelf}
            books={books} />}
      </div>
    )
  }
}

export default BooksApp
