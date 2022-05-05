import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <div class="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <li>Welcome, {user.name}</li>
            <a><Link to="/profiles">Profiles</Link></a>
            <a><Link to="" onClick={handleLogout}>LOG OUT</Link></a>
            <a><Link to="/changePassword">Change Password</Link></a>
            <a><Link to="/">Dashboard</Link></a>
          </ul>
        </nav>
        </div>  
      :

        <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <a><Link to="/login">Log In</Link></a>
            <a><Link to="/signup">Sign Up</Link></a>
          </ul>
        </nav>
        </div>
      }

    </>
  )
}

export default NavBar
