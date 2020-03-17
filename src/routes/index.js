import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Home from 'views/Home';
import About from 'views/About';
import ErrorNotFound from 'views/ErrorNotFound';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={ErrorNotFound} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}
