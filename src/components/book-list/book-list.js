import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css'

const BookList = (props) => {

  const { books, loading, bookstoreService, booksLoaded }  = props
  
  useEffect(() => {

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
    
    return () => {console.log('BookList unmount')}
  }, [ bookstoreService, booksLoaded ])

  if (loading) {
    return <Spinner />
  }

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

const mapStateToProps = ({ books, loading }) =>  ({ books, loading });
const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
