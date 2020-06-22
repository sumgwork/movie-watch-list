import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">Redux</div>
    </Provider>
  );
};

export default App;
