import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { fetchBooks } from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css'
import ErrorIndicator from '../error-indicator';

const BookList = ({ books }) => {
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
  );
}

const BookListContainer = (props) => {

  const { books, loading, error, fetchBooks }  = props
  
  useEffect(() => {  
    fetchBooks()
    return () => {
      console.log('BookListContainer unmount')
    };
  }, [fetchBooks]);

  return  loading ? <Spinner/>:
          error ? <ErrorIndicator/>:
          <BookList books={books}/>;

};

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({fetchBooks: fetchBooks(bookstoreService, dispatch)})

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
