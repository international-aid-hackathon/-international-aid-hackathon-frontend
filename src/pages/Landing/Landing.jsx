import styles from './Landing.module.css'
import Dashboard  from '../Dashboard/Dashboard'
import { Link, useNavigate } from 'react-router-dom'
const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name && user.lastName : 'friend'}</h1>
      <Dashboard/>
    </main>
  )
}

export default Landing
