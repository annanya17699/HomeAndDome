import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../Utils/Images/logo.png'
function NavBar() {
 return (
  <>
  <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <img
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top rounded-circle"
        alt="HomeAndDome"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link className='px-5' href="#home">Home</Nav.Link>
        <Nav.Link className='px-5' href="#home">Services</Nav.Link>
        <NavDropdown className='px-5' title="Student" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Student Profiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Student Bookings</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className='px-5' title="Owner" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Owner Profiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Owner Housings</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className='px-5' href="#home">About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
 )
}

export default NavBar
