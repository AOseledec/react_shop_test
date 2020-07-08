import React from 'react'
import './order-button.css'
const OrderButton = (props) => {
    return (
        <button onClick={props.onClick} className="btn btn-primary col-md-2 order-button">Перейти к оплате</button>
    )
}

export default OrderButton;
