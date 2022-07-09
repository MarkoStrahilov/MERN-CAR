import React from 'react'
import {useState, useEffect }from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/auth.css'


const PasswordReset = () => {

  const navigate = useNavigate()

  const [email,setEmail] = useState('')

  
    const styles = {
        width:"100%",
        height: "100vh",
        backgroundImage:  "linear-gradient(90deg, #cde3e6, #00a8ff)"
    }
    const onSubmit = async(e) => {

      try {
       
       e.preventDefault()
       const user = {email}
       await axios.post('http://localhost:2000/api/v1/auth//auth/password/reset', user)
 
       toast.success('reset token send, please check your inbox')
 
       navigate({
         pathname: `/password-reset`
       })
     
      } catch (error) {
      
       toast.error("something went wrong, account doesn't exist")
       navigate({
         pathname: `/password-reset`
       })
 
      } 
         
     }

     
    return (
      <form style={styles} onSubmit={onSubmit}>
        <div className='sign-container'>
          <div className="sign-form">
            <div className='sign-title'>
              <h1>Reset You Password</h1>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor='register-email'>
                <span className="label-text">Email</span>
              </label>
              <input type="email" id='email' className="input input-bordered input-accent w-full max-w-xs" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
              <button className='btn btn-accent mt-8 border'>Get Token</button>
          </div>
        </div>
      </form>
    )


}

export default PasswordReset