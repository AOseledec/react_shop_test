import updateShoppingCart from './shopping-cart';
import updateBooklist from './book-list';

const reducer = (state, action) => {
  return {
    bookList: updateBooklist(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
};

export default reducer;