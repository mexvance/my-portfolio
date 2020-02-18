import * as React from "react";
import { withRouter } from 'react-router'
import '../css/headbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
const HeadBar = props =>{
    const pushLink = linkName =>{
      props.history.push(linkName);
    }
    return(
      <>
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Navbar.Brand className="brand">Michael Vance</Navbar.Brand>
              </LinkContainer>
              {/* <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/projects">
                <NavDropdown title="Projects">
                  <NavDropdown.Item bg="dark" onClick={() => pushLink("/projects")}>Projects Home</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="nav-dropdown" onClick={() => pushLink("/projects/aspCMS")}>ASP.NET CMS</NavDropdown.Item>
                  <NavDropdown.Item className="nav-dropdown" onClick={() => pushLink("/projects/Pokedex")}>Pokedex</NavDropdown.Item>
                  <NavDropdown.Item className="nav-dropdown" onClick={() => pushLink("/projects/greenbean")}>Project GreenBean</NavDropdown.Item>
                  <NavDropdown.Item className="nav-dropdown" onClick={() => pushLink("/projects/personalPortfolio")}>Personal Portfolio</NavDropdown.Item>
                </NavDropdown>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
};

export default withRouter(HeadBar);