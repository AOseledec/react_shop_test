import React from 'react'

const BookListItem = ({ book }) => {
  const { title, author } = book
  
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>    
    </div>
  )
}

export default BookListItem;
