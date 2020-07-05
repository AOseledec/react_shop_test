import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css'
import ErrorIndicator from '../error-indicator';

const BookList = (props) => {

  const { 
    books,
    loading,
    error,
    bookstoreService,
    booksLoaded,
    booksRequested,
    booksError
  }  = props
  
  let content = (<ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book}/>
            </li>
          );
        })
      }
    </ul>);

  useEffect(() => {
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksError(error));
    
    return () => {
      content = null;
      console.log('BookList unmount')
    };

  }, [
    bookstoreService,
    booksLoaded,
    booksRequested,
    booksError,
  ]);

  return  loading ? <Spinner/> :
          error ? <ErrorIndicator/> : content;

}

const mapStateToProps = ({ books, loading, error }) =>  ({ books, loading, error });
const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
