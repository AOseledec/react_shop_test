import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_FAILURE
} from '../actions/const';

const updateBooklist = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null
    }
  }

  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null
      };

    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        error: null,
        loading: true
      };

    case FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.bookList;
  };
};

export default updateBooklist;