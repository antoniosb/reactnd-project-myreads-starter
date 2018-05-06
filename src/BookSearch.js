import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

export default class BookSearch extends Component {
  state = {
    term: '',
    searchResult: [],
  }

  bookSearch = (term) => {
    const currentTerm = this.state.term
    const currentBookShelves = this.props.currentBookShelves()
    this.setState({ term });
    if (term !== '' && term !== currentTerm) {
      BooksAPI.search(this.state.term).then((searchResult) => {
        if (searchResult !== undefined && !searchResult.hasOwnProperty('error')) {
          searchResult.forEach(book => {
            book.shelf = currentBookShelves[book.id]
          })
          this.setState({ searchResult })
        } else {
          this.setState({ searchResult: [] })
        }
      })
    } else {
      this.setState({ searchResult: [] })
    }
  }

  render() {
    const { onUpdateShelf } = this.props
    const { term, searchResult } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={term}
              onChange={(event) => this.bookSearch(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.map((book) => <Book book={book} key={book.id} updateShelf={onUpdateShelf} />)}
          </ol>
        </div>
      </div>
    );
  }
}
