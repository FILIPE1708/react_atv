import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as HashRouter, NavLink, Route, Switch} from "react-router-dom";
import Index from "../../pages/Index";
import Home from "../../pages/Home";
import About from "../../pages/About";
import React from "react";

function MyNavbar(props) {
  return (
      <HashRouter>
          <Navbar bg="light" expand="lg"><Container>
              <Navbar.Brand href="#">{props.titulo}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav"><Nav className="header">
                  <NavLink className="me-3 text-dark text-decoration-none" to="/">Inicío</NavLink>
                  <NavLink className="me-3 text-dark text-decoration-none" to="/filmes">Filmes</NavLink>
                  <NavLink className="me-3 text-dark text-decoration-none" to="/sobre">Sobre</NavLink>
              </Nav>
              </Navbar.Collapse>z
          </Container>
          </Navbar>


          <div>
              <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/filmes" render={Home} />
                  <Route path="/sobre" render={About} />
              </Switch>
          </div>
      </HashRouter>
  );

}

export default MyNavbar;