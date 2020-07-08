import React, {useState} from 'react';
import { connect } from 'react-redux';

import { allBookRemovedFromCart, bookRemovedFromCart, bookAddedToCart } from '../../actions';
import OrderButton from '../order-button'
import OrderForm from '../order-form'
import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete}) => {

  const [showForm, setShowForm] = useState(false)

  const onShowForm = () => {
    console.log(showForm)
    setShowForm(!showForm)
  }

  const renderRow = (item, ind) => {
    const { id, title, count, total } = item
    return (
      <tr key={ind}>
        <td>{ind + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-s"
            ><i className="fa fa-plus-circle"/>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-s"
            ><i className="fa fa-minus-circle"/>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-s"
            ><i className="fa fa-trash-o"/>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
        <OrderButton onClick={onShowForm}/>
      </div>
      
       {showForm && <OrderForm />}
      
    </div>
  )
}

const matStateToProps = ({ shoppingCart: { orderTotal, cartItems }}) => ({ total: orderTotal, items: cartItems})

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBookRemovedFromCart
}

export default connect(matStateToProps, mapDispatchToProps)(ShoppingCartTable);
