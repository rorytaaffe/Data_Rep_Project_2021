import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css'; // from Bootstrap Website
import { Navbar, Nav } from 'react-bootstrap'; // allows us to use the Navbar

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  // BrowserRouter as Router , whenever we want to use BrowserRouter we can write Router 

import { Read } from './components/read'; // import components
import { Create } from './components/create';

// Changed from Function to Class, and added extends Component to turn it into a component
class App extends Component {

  // added the render method and wrapped it around the whole return method
  render() {

    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br></br>
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
          </Switch>
        </div>
      </Router>
    );

  } // render()

} // class App


export default App;
