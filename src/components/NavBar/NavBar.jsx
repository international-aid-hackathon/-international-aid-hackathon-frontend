import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      
      
        // <nav>
        //   <ul>
        //     <li>Welcome, {user.name}</li>
        //     <li><Link to="/profiles">Profiles</Link></li>
        //     <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        //     <li><Link to="/changePassword">Change Password</Link></li>
        //   </ul>
        // </nav>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> {user.name}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/job">Features</Nav.Link>
      <Nav.Link ><li><Link to="/changePassword">Change Password</Link></li></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
