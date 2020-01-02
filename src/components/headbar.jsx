import * as React from "react";
import {withRouter} from "react-router-dom";
import '../css/headbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
const HeadBar = props =>{
    return(
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Navbar.Brand className="brand">Michael Vance</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
};

export default withRouter(HeadBar);