import {useState, useEffect }from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/registerImg.jpg'
import PhoneMockup from '../shared/PhoneMockup'
import useFetch from '../hooks/useFetch'
import axios from 'axios'

// styles
import '../assets/auth.css'

const SignUp = () => {


  const navigate = useNavigate()

    const styles = {
        width:"100%",
        height: "100vh",
        backgroundImage:  "linear-gradient(90deg, #cde3e6, #00a8ff)"
    }

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const onSubmit = async(e) => {
        e.preventDefault()
        const user = {name,email,password}
        axios.post('http://localhost:2000/api/v1/create/user', user)

    }


    return (
        <form style={styles} onSubmit={onSubmit}>
          <div className='sign-container'>
            <div className="sign-form">
              <div className='sign-title'>
                <h1>Sign Up Today, It's FREE</h1>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label" htmlFor='register-name'>
                  <span className="label-text">Name</span>
                </label>
                <input type="text" id='name' className="input input-bordered input-accent w-full max-w-xs" name={'user-sign-up-name'} value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label" htmlFor='register-email'>
                  <span className="label-text">Email</span>
                </label>
                <input type="email" id='email' className="input input-bordered input-accent w-full max-w-xs" name={'user-sign-up-email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label" htmlFor='register-password'>
                  <span className="label-text">Password</span>
                </label>
                <input type="password" id='password' className="input input-bordered input-accent w-full max-w-xs" name={'user-sign-up-password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="label">
              <span className="label-text-alt font-bold mt-2">already have an account ? sign in <Link to={'/sign-in'} style={{'borderBottom': "1px solid #000"}}>here</Link></span>
              </div>
                <button className='btn btn-accent mt-8 border'>Register</button>
            </div>
            <div className="sign-phone-conatiner">
                <PhoneMockup url={registerImg}/>
            </div>
          </div>
        </form>
      )

}

export default SignUp