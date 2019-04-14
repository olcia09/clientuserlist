import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Users/UsersList'
import UserList from './Users/UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList/>
      </div>
    );
  }
}
export default App;
