import * as React from "react";
import { withRouter } from "react-router";
import "../css/headbar.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const HeadBar = props => {
  const pushLink = linkName => {
    props.history.push(linkName);
  };

  return (
    <>
      <div className="sticky">
        <Navbar variant="dark" expand="lg" className="navbar">
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
                <Nav.Link bg="dark" onClick={() => pushLink("/projects")}>
                  Projects
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default withRouter(HeadBar);
