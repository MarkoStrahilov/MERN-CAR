import React from 'react'
import registerImg from '../assets/images/registerImg.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='app-register'>
      <div className='sign-container'>
        <div className="sign-form">
          <div className='sign-title'>
            <h1>Register Now, For FREE</h1>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='register-name'>
              <span className="label-text">Name</span>
            </label>
            <input type="text" id='register-name' className="input input-bordered input-accent w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='register-email'>
              <span className="label-text">Email</span>
            </label>
            <input type="email" id='register-email' className="input input-bordered input-accent w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='register-password'>
              <span className="label-text">Password</span>
            </label>
            <input type="password" id='register-password' className="input input-bordered input-accent w-full max-w-xs" />
          </div>
          <div className="label">
          <span className="label-text-alt font-bold mt-2">already have an account ? sign in <Link to={'/sign-in'} style={{'borderBottom': "1px solid #000"}}>here</Link></span>
          </div>
            <button className='btn btn-accent mt-8 border'>Register</button>
        </div>
        <div className="sign-phone-conatiner">
          <div className="mockup-phone border-accent">
            <div className="camera"></div> 
            <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img src={registerImg} alt="register img" className='sign-img' />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register