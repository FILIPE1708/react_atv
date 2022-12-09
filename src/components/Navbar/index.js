import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as HashRouter, Route, Switch} from "react-router-dom";
import Index from "../../pages/Index";
import Filmes from "../../pages/Filmes";
import About from "../../pages/About";
import React from "react";

function MyNavbar(props) {
  return (
      <HashRouter>
          <Navbar bg="light" expand="lg"><Container>
              <Navbar.Brand href="#">{props.titulo}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav"><Nav className="header">
                  <Nav.Link className="me-3 text-dark text-decoration-none" href="/">Inicío</Nav.Link>
                  <Nav.Link className="me-3 text-dark text-decoration-none" href="/filmes">Filmes</Nav.Link>
                  <Nav.Link className="me-3 text-dark text-decoration-none" href="/sobre">Sobre</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
          </Navbar>


          <div>
              <Switch>
                  <Route exact path="/" component={Index}/>
                  <Route path="/filmes" render={Filmes} />
                  <Route path="/sobre" render={About} />
              </Switch>
          </div>
      </HashRouter>
  );

}

export default MyNavbar;