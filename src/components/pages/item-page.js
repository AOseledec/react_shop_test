import React from 'react'
import BookListItemContainer from './book-list-item-container'


const ItemPage = ({itemId}) => {
    return <BookListItemContainer itemId={1*itemId}/>
}


export default ItemPage