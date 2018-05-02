import React, { Component } from 'react';

export const shelfTitles = () => ({
  wantToRead: 'Want To Read',
  currentlyReading: 'Currently Reading',
  read: 'Read',
});

export class Shelf extends Component {

  updateShelf = (book, newShelf) => {
    this.props.onUpdateShelf(book, newShelf)
  }

  render() {
    const { book } = this.props
    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={(event) => this.updateShelf(book, event.target.value)}>
          <option value="none" disabled>Move to...</option>
          {Object.keys(shelfTitles()).map(shelf =>
            <option key={shelf} value={shelf}>{shelfTitles()[shelf]}</option>
          )}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
