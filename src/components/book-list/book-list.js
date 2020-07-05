import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';

import './book-list.css'

const BookList = (props) => {

  const { books, bookstoreService, booksLoaded }  = props
  
  useEffect(() => {
    const data = bookstoreService.getBooks()
    booksLoaded(data)
    return () => {console.log('BookList unmount')}
  }, [ bookstoreService, booksLoaded ])

  return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book}/>
            </li>
          );
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ books }) =>  ({ books });
const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
