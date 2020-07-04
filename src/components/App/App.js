import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import { CartPage, HomePage } from '../pages';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to='/'>HomePage</Link>
          <Link to='/cart'>Cart</Link>
        </ul>
      </nav>
      <Switch>
        <Route path='/' component={HomePage} exact></Route>
        <Route path='/cart' component={CartPage}></Route>
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  );
}

export default App;
