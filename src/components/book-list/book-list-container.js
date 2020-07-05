import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import { fetchBooks, bookAddedToCart } from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css'
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddaedToCart }) => {
  return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem onAddaedToCart={() => onAddaedToCart(book.id)} book={book}/>
            </li>
          );
        })
      }
    </ul>
  );
}

const BookListContainer = (props) => {

  const { books, loading, error, fetchBooks, onAddaedToCart }  = props
  
  useEffect(() => {  
    fetchBooks()
    return () => {
      console.log('BookListContainer unmount')
    };
  }, [fetchBooks]);

  return  loading ? <Spinner/>:
          error ? <ErrorIndicator/>:
          <BookList onAddaedToCart={onAddaedToCart} books={books}/>;

};

const mapStateToProps = ({ bookList: { books, loading, error }}) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
  onAddaedToCart: (id) => dispatch(bookAddedToCart(id))
})

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
