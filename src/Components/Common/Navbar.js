import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import logo from '../Utils/Images/logo.png'
function NavBar() {
  const history=useHistory()
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
        <Nav.Link className='px-5' onClick={()=>history.push('/')}>Home</Nav.Link>
        <Nav.Link className='px-5' onClick={()=>history.push('/services')}>Services</Nav.Link>
        <NavDropdown className='px-5' title="Student" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>history.push('/student')}>Student Profiles</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>history.push('/student/form')}>Student Bookings</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className='px-5' title="Owner" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>history.push('/owner')}>Owner Profiles</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>history.push('/owner/form')}>Owner Housings</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className='px-5' onClick={()=>history.push('/about')}>About Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
 )
}

export default NavBar
