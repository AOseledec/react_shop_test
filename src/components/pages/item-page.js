import React from 'react'
import BookListItem from '../book-list-item'

const ItemPage = ({itemId}) => {
    return (
<>
    <div>Товар{itemId}</div>
    <div className="img">
        <img src="" alt=""/>
    </div>
</>
    )
}

export default ItemPage;
