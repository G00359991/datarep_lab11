import React, { Component } from 'react'; // pulls in code from react to be used in App.js and allow for the html to be outputted into the react app
import './App.css';
import { Content } from './Components/content'; // pulls in code from the content.js component to be used in App.js
import { Footer } from './Components/footer'; // pulls in code from the footer.js component to be used in App.js
import { Header } from './Components/header'; // pulls in code from the header.js component to be used in App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // pulls down from bootstrap for added css styling in the app
import { Navbar, Nav } from 'react-bootstrap'; // pulls the navbar css from online.

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; // pulls from react-router-dom that was installed to add to the app's navbar and links
import { Create } from './Components/create'; // pulls in code from the create.js component to be used in App.js
import { Read } from './Components/read'; // pulls in code from the read.js component to be used in App.js


class App extends React.Component { // extends from and uses the code from react


  render() { 
    return ( /* outputs the navbar and nav links to the screen */
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
          </Navbar>
          <Switch>
            <Route path='/' component={Content} exact></Route> 
            <Route path='/create' component={Create} exact></Route>
            <Route path='/read' component={Read} exact></Route>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App; // allows the code to run and show the app made on a browser window.
