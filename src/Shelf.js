import React from 'react';

export const shelfTitles = () => ({
  wantToRead: 'Want To Read',
  currentlyReading: 'Currently Reading',
  read: 'Read',
});

export const shelfTitlesKeys = () => (Object.keys(shelfTitles()));

export const Shelf = ({book, updateShelf}) => {
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf || "none"} onChange={(event) => updateShelf(book, event.target.value)}>
        <option value="moving" disabled>Move to...</option>
        {Object.keys(shelfTitles()).map(shelf =>
          <option key={shelf} value={shelf}>{shelfTitles()[shelf]}</option>
        )}
        <option value="none">None</option>
      </select>
    </div>
  );
};
