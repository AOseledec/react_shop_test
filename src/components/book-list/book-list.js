import React, { useState, useEffect } from 'react';
import BookListItem from '../book-list-item';

const BookList = ({ books }) => {

  return (
    <ul>
      {
        books.map((book) => {
          return (
            <li>
              <BookListItem book={book}/>
            </li>
          );
        })
      }
    </ul>
  )
}

export default BookList;
