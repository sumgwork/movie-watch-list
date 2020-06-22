import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Details from './components/content/details/Details';
import ErrorPage from './components/error/ErrorPage';
import Header from './components/header/Header';
import Main from './components/main/Main';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id/:name/details" component={Details} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
