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

export {
  fetchBooks
};