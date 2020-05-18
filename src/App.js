import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Header from './component/Header';
import Login from './component/Login';
import Product from './component/Product';
import reducer from './component/redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {redux} from 'redux'

function App() {
  // const createStore = redux.createStore
  const store = createStore(reducer);
  return (
  <Provider store={store}>
      <Router>
          <div className="App">
            <Header/>
            <Route path="/login" component={Login} />
            <Route exact path="/product" exact component={Product} />
          </div>  
      </Router>
  </Provider>
  );
}
export default App;
