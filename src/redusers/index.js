import * as type from '../actions/const';

const initialState = {
  books: [],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    case type.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        error: null,
        loading: true
      };
    case type.FETCH_BOOKS_FAILURE:
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