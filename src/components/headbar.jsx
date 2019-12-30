import * as React from "react";
import {withRouter} from "react-router-dom";
import '../css/headbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const HeadBar = props =>{
    return(
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/" >Michael Vance</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
};

export default withRouter(HeadBar);