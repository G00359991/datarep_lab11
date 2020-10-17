import React, { Component } from 'react';
import './App.css';
import { Content } from './Components/content'; // pulls in code from the content.js component to be used in App.js
import { Footer } from './Components/footer'; // pulls in code from the footer.js component to be used in App.js
import { Header } from './Components/header'; // pulls in code from the header.js component to be used in App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // pulls down from bootstrap for added css styling in the app
import { Navbar, Nav } from 'react-bootstrap'; // pulls the navbar css from online.

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // pulls from react-router-dom that was installed to add to the app's navbar and links


class App extends React.Component { // extends from and uses the code from react


  render() { 
    return ( /* outputs the navbar and nav links to the screen */
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sport">Sport</Nav.Link>
            <Nav.Link href="/travel">Travel</Nav.Link>
          </Nav>
          </Navbar>
          <Switch>
            <Route path='/' component={Content} exact></Route> 
            <Route path='/sport' component={Header} exact></Route>
            <Route path='/travel' component={Footer} exact></Route>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App; // allows the code to run and show the app made on a browser window.
