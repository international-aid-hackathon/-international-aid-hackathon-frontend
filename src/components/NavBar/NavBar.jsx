import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <li>Welcome, {user.name}</li>
            <ul><Link to="/profiles">Profiles</Link></ul>
            <ul><Link to="" onClick={handleLogout}>LOG OUT</Link></ul>
            <ul><Link to="/changePassword">Change Password</Link></ul>
            <ul><Link to="/">Dashboard</Link></ul>
          </ul>
        </nav>
        </div>  
      :

        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
        </div>
      }

    </>
  )
}

export default NavBar
