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
  <Navbar.Brand href="/"> {user.name}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/job"><Link to="/job"> add jobs</Link></Nav.Link>
      <Nav.Link ><li ><Link to="/changePassword">Change Password</Link></li></Nav.Link>
      <Nav.Link ><li ><Link to="/">Dashboard</Link></li></Nav.Link>
      <Nav.Link ><li><Link to="" onClick={handleLogout}>LOG OUT</Link></li></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      :
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><li ><li><Link to="/signup">Sign Up</Link></li></li></Nav.Link>
              <Nav.Link ><li ><li><Link to="/login">Log In</Link></li></li></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
      }
    </>
  )
}

export default NavBar
