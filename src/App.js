import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';

import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
            <Layout />
        </Provider>
      </div>
    );
  }
}

export default App;