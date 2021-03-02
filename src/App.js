import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Users from './Components/Users'
import  AddUser from './Components/AddUser'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => {
  return <h3>Home Page</h3>
};

const About = () => {
  return <h3>About Page</h3>
}

class App extends Component {
//   <Navbar 
//   title = 'Employers'
// />
// <AddUser/>
// <Users />
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Home}>
          </Route>
          <Route exact path='/about' component={About}>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
