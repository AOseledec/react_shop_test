import React, { useEffect } from 'react'
import BookListItem from '../book-list-item'
import { connect } from 'react-redux';
import { bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookListItemContainer = ({ itemId, loading, error, onAddaedToCart, books  }) => {
  
  return  loading ? <Spinner/>:
          error ? <ErrorIndicator/>:
          <BookListItem onAddaedToCart={() => onAddaedToCart(itemId)} book={books.find(i => i.id === itemId)}/>;

};
  
const mapStateToProps = ({ bookList: { books, loading, error }}) => ({ books,  loading, error });

const mapDispatchToProps = (dispatch) => ({
  onAddaedToCart: (id) => dispatch(bookAddedToCart(id))
})
  
export default  compose( connect(mapStateToProps, mapDispatchToProps) )(BookListItemContainer);