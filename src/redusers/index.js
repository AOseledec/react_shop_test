import * as type from '../actions/const';

const initialState = {
  bookList: {
    books: [],
    loading: true,
    error: null
  },

  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
  }
};
  

const updateCartItems = (cartItems, item, indx) => {
  
  if (indx < 0) {
    return [
      ...cartItems,
      item
    ]
  };

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, indx),
      ...cartItems.slice(indx + 1),
    ]
  }

  return [
    ...cartItems.slice(0, indx),
    item,
    ...cartItems.slice(indx + 1)
  ]

};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };

};

const updateOrder = (state, bookId, quantity) => {
  const { booksList: { books }, shoppingCart: { cartItems } } = state
  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId );
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity)
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateBooklist = (state, action) => {
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
  };
};

const updateShoppingCart = (state, action) => {
  switch (action.type) {
    case type.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case type.BOOK_REMOVED_FROM_CART:
      const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    case type.ALL_BOOKS_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    default:
      return state;
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_BOOKS_FAILURE:
    case type.FETCH_BOOKS_REQUEST:
    case type.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        bookList: updateBooklist(state, action)
      };
    
    case type.BOOK_ADDED_TO_CART:
    case type.BOOK_REMOVED_FROM_CART:
    case type.ALL_BOOKS_REMOVED_FROM_CART:
      return {
        ...state,
        shoppingCart: updateShoppingCart(state, action)
      };
  
    default:
      return state;
  }
};

export default reducer;