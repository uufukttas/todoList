import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Users from './Components/Users'
import  AddUser from './Components/AddUser'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar 
          title = 'Employers'
        />
        <AddUser/>
        <Users />
      </div>
    );
  }
}

export default App;
