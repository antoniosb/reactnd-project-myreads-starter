import React, { Component } from 'react';
import { Shelf } from './Shelf';

export default class Book extends Component {
  render() {
    const { book, onUpdateShelf } = this.props

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {book.imageLinks ?
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> :
              <div className="book-cover" style={{ width: 128, height: 193 }}>image not found</div>
            }
            <Shelf book={book} onUpdateShelf={onUpdateShelf} />
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors ?
          <div className="book-authors">{book.authors.join(', ')}</div> :
          <div className="book-authors">authors not found</div>
          }
        </div>
      </li>
    );
  }
}
