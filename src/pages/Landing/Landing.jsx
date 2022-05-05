import styles from './Landing.module.css'
import Dashboard  from '../Dashboard/Dashboard'
import { Link, useNavigate } from 'react-router-dom'
const Landing = ({ user, jobData}) => {
  return (
    <main className={styles.container}>
      <h1> Welcome, {user ? user.name : 'friend'} </h1>
      <Dashboard
      jobData={jobData}
      />
    </main>
  )
}

export default Landing
