import * as type from '../actions/const';

const initialState = {
  books: [],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.BOOKS_LOADED:
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    case type.BOOKS_REQUESTED:
      return {
        books: [],
        error: null,
        loading: true
      };
    case type.BOOKS_ERROR:
      return {
        books: [],
        loading: false,
        error: action.payload
      };
  
    default:
      return state;
  }

}

export default reducer