import * as type from './const';

const booksLoaded = (newBooks) => {
  return {
    type: type.FETCH_BOOKS_SUCCESS,
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: type.FETCH_BOOKS_REQUEST
  }
}

const booksError = (error) => {
  return {
    type: type.FETCH_BOOKS_FAILURE,
    payload: error
  }
}

const fetchBooks = ( bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
  .then((data) => dispatch(booksLoaded(data)))
  .catch((error) => dispatch(booksError(error)));
}

const bookAddedToCart = (bookId) => {
  return {
    type: type.BOOK_ADDED_TO_CART,
    payload: bookId
  }
}

const bookRemovedFromCart = (id) => {
  return {
    type: type.BOOK_REMOVED_FROM_CART,
    payload: id
  }
}
const allBookRemovedFromCart = (id) => {
  return {
    type: type.ALL_BOOKS_REMOVED_FROM_CART,
    payload: id
  }
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBookRemovedFromCart,
};