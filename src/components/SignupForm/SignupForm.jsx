import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    lastName: '',
    phone:'',
    role:''
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf, lastName, phone, role } = formData

  const isFormInvalid = () => {
    return !(lastName, phone, role, name && email && password && password === passwordConf)
  }

  return (
    
//     <form
//       autoComplete="off"
//       onSubmit={handleSubmit}
//       className={styles.container}
//     >
//       <div className={styles.inputContainer}>
//         <label htmlFor="name" className={styles.label}>Name</label>
//         <input
//           type="text"
//           autoComplete="off"
//           id="name"
//           value={name}
//           name="name"
//           onChange={handleChange}
//         />

//         <div>
//       <label htmlFor="name" className={styles.label}>last Name</label>
//         <input
//           type="text"
//           autoComplete="off"
//           id="lastName"
//           value={lastName}
//           name="lastName"
//           onChange={handleChange}
//           />
//           </div>

//                   <div>
//       <label htmlFor="name" className={styles.label}>phone</label>
//         <input
//           type="text"
//           autoComplete="off"
//           id="phone"
//           value={phone}
//           name="phone"
//           onChange={handleChange}
//           />
//           </div>

//       </div>
//       <div className={styles.inputContainer}>
//         <label htmlFor="email" className={styles.label}>Email</label>
//         <input
//           type="text"
//           autoComplete="off"
//           id="email"
//           value={email}
//           name="email"
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.inputContainer}>
//         <label htmlFor="password" className={styles.label}>Password</label>
//         <input
//           type="password"
//           autoComplete="off"
//           id="password"
//           value={password}
//           name="password"
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.inputContainer}>
//         <label htmlFor="confirm" className={styles.label}>
//           Confirm Password
//         </label>
//         <input
//           type="password"
//           autoComplete="off"
//           id="confirm"
//           value={passwordConf}
//           name="passwordConf"
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.inputContainer}>
//         <button disabled={isFormInvalid()} className={styles.button}>
//           Sign Up
//         </button>
//         <Link to="/">
//           <button>Cancel</button>
//         </Link>
//       </div>
//     </form>
// </>
// <>
<>
<form class="text-center border border-light p-5" autoComplete="off"
      onSubmit={handleSubmit}>

    <p class="h4 mb-4">Sign up</p>

    <div class="form-row mb-4">
        <div class="col">
            {/* <!-- First name --> */}
            <small> First Name </small>
            <input 
                type="text"
                className="form-control" 
                placeholder="First name" 
                
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={handleChange}
              />
        </div>
        <div class="col">
            {/* <!-- Last name --> */}
            <small> last Name </small>
              <input 
              className="form-control" 
              placeholder="Last name"
              type="text"
              autoComplete="off"
              id="lastName"
              value={lastName}
              name="lastName"
              onChange={handleChange}
            />
        </div>
    </div>

    {/* <!-- E-mail --> */}
    <small> Email </small>
    <input className="form-control mb-4" placeholder="E-mail"
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
    />

    {/* <!-- Password --> */}
      <small> password</small>
    <input 
     type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        className="form-control"
        placeholder="Password" 
    />
    <small> Confirm password </small>
        <input 
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        className="form-control"
        placeholder="Password" 
    />

    {/* <!-- Phone number --> */}
    <small> Phone Number</small>
    <input type="text"   
          autoComplete="off"
          id="phone"
          value={phone}
          name="phone"
          onChange={handleChange}
          className="form-control" placeholder="Phone number"
          />

    <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
        Optional - for two step authentication
    </small>
    <button disabled={isFormInvalid()} className="btn btn-info my-4 btn-block" >Sign up</button>
        <small><Link to="/login">Alredy have an account?</Link></small>
        
        <Link to="/">
        <button  class="btn btn-outline-secondary">Cancel</button>
        </Link>
</form>
</>
  )
}

export default SignupForm
