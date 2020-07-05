import * as type from './const';

const booksLoaded = (newBooks) => {
  return {
    type: type.BOOKS_LOADED,
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: type.BOOKS_REQUESTED
  }
}

const booksError = (error) => {
  return {
    type: type.BOOKS_ERROR,
    payload: error
  }
}

export {
  booksLoaded,
  booksRequested,
  booksError
};