import React from 'react';
import Book from './Book';
import { shelfTitles, shelfTitlesKeys } from './Shelf';
import { Link } from 'react-router-dom';

const BookList = ({books, updateShelf}) => {
  const filterByShelf = (books, shelfName) => (books.filter((book) => book.shelf === shelfName));

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
                  {filterByShelf(books, shelf).map((book) => (
                    <Book book={book} key={book.id} updateShelf={updateShelf} />
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
export default BookList;
