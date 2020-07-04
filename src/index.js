import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BookstoreProvider } from './components/bookstore-service-context';
import { bookstoreService } from './services/book-store';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'));