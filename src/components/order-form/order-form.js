import React from 'react'
import './order-form.css'
const OrderForm = () => {
    return (

      <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Name</label>
          <input type="name" className="form-control" id="inputPassword4" placeholder="Name"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        
      </div>

      <div className="form-row">
        <div className="form-group col-md-2">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
      </div>
    
      
      <button type="submit" className="btn btn-primary">Оплатить</button>
    </form>

    )
}

export default OrderForm;
