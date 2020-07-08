import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { CartPage, HomePage, ItemPage } from '../pages';
import ShopHeader from '../shop-header';

import './app.css';

const App = ({total, items}) => {

  return (
    <main role='main' className="container">
      <ShopHeader numItems={items.reduce((acum, cur) => acum + cur.count, 0)} total={total}/>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/cart' component={CartPage}/>
        <Route path='/item/:id' render={({match}) => <ItemPage itemId={match.params.id}/>}/>
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </main>
  );
}

const matStateToProps = ({ shoppingCart: { orderTotal, cartItems }}) => ({ total: orderTotal, items: cartItems})

export default connect(matStateToProps)(App);
