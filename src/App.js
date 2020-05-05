import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Header from './component/Header';
import Login from './component/Login';
import Product from './component/Product';

function App() {
  return (
      <Router>
      <div className="App">
        <Header/>
            <Switch>
              <Route path="/" exact component={Product} /> 
              <Route path="/login" component={Login} />
            </Switch>
      </div>  
    </Router>
  );
}

export default App;
