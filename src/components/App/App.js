import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { CartPage, HomePage } from '../pages';
import ShopHeader from '../shop-header';

import './app.css';

const App = () => {
  return (
    <main role='main' className="container">
      <ShopHeader numItems={5} total={240}/>
      <Switch>
        <Route path='/' component={HomePage} exact></Route>
        <Route path='/cart' component={CartPage}></Route>
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </main>
  );
}

export default App;
