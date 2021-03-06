import React from 'react'
import {Link} from 'react-router-dom';

import './book-list-item.css'

const BookListItem = ({ book, onAddaedToCart }) => {
  const { id, title, author, price, coverImage } = book
  
  return (
  
    <div className='book-list-item'>
      <div className="book-cover">
        <img src={coverImage} alt="cover"/>
      </div>
      <div className="book-details">
      <Link to={`/item/${id}`} className="book-title">
        {title}
      </Link>
       
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        
        <button
          onClick={onAddaedToCart}
          className="btn btn-info add-to-cart"
        >Add to cart</button>
      </div>
    </div>
    
  );

}

export default BookListItem;
