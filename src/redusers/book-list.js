import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_FAILURE,

} from '../actions/const';

const updateBooklist = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      book: null,
      loading: true,
      error: null
    }
  }

  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        book: null,
        loading: false,
        error: null
      };

    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        book: null,
        error: null,
        loading: true
      };

    case FETCH_BOOKS_FAILURE:
      return {
        books: [],
        book: null,
        loading: false,
        error: action.payload
      };

    default:
      return state.bookList;
  };
};

export default updateBooklist;