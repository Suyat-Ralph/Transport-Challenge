import React from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Chatbox from "./Components/Chatbox";

function App() {
  return (
    <div className="App">
      {/* <header>
        <Navbar sticky="top">
          <Navbar.Brand href="#home">Transportation Challenge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Trims</Nav.Link>
              <Nav.Link href="#pricing">Colors</Nav.Link>

              <NavDropdown title="Models" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Standard</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sport</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Luxury</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link href="#memes">Sponsor</Nav.Link>
              <Nav.Link href="#memes">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header> */}
      <Chatbox />
    </div>
  );
}

export default App;
