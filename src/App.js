import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Details from './components/content/details/Details';
import ErrorBoundary from './components/error/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { appRoutes } from './redux/actions/routes';

const App = (props) => {
  const { appRoutes } = props;
  const routesArray = [
    {
      id: 1,
      path: '/',
      component: Main,
    },
    {
      id: 2,
      path: '/:id/:name/details',
      component: Details,
    },
  ];

  useEffect(() => {
    appRoutes(routesArray);
  }, [routesArray, appRoutes]);

  useEffect(() => {
    document.title = process.env.NODE_ENV === 'production' ? 'Movie Watch List' : `Movie Watch List | ${process.env.NODE_ENV}`;
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <Header />
        {/* All errors will be thrown from error component */}
      </ErrorBoundary>
      <div className="app">
        <Switch>
          {routesArray.map((data) => (
            <Route key={data.id} exact path={data.path} component={data.component} {...props} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  appRoutes: PropTypes.func,
};

export default connect(null, { appRoutes })(App);
