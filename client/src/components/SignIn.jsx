import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/registerBackground.jpg'
import PhoneMockup from '../shared/PhoneMockup'

// styles
import '../assets/auth.css'

const SignIn = () => {

const navigate = useNavigate()

  const styles = {
    width:"100%",
    height: "100vh",
    backgroundImage:  "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
}

const [signInData, setSignInData] = useState({
  email: '',
  password: ''
})

const {email,password} = signInData



const onSubmit = async(e) => {
e.preventDefault()

}

  return (
    <form style={styles} onSubmit={onSubmit}>
      <div className='sign-container'>
        <div className="sign-form">
          <div className='sign-title'>
            <h1>Welcome Back, Nice To See You Again</h1>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='register-email'>
              <span className="label-text">Email</span>
            </label>
            <input type="email" id='email' className="input input-bordered input-accent w-full max-w-xs" name={'user-sign-in-email'}  />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='register-password'>
              <span className="label-text">Password</span>
            </label>
            <input type="password" id='password' className="input input-bordered input-accent w-full max-w-xs" name={'user-sign-in-password'} />
          </div>
          <div className="label">
          <span className="label-text-alt font-bold mt-2">already have an account ? sign in <Link to={'/sign-up'} style={{'borderBottom': "1px solid #000"}}>here</Link></span>
          </div>
            <button className='btn btn-accent mt-8 border'>Sign In</button>
        </div>
        <div className="sign-phone-conatiner">
                <PhoneMockup url={registerImg}/>
            </div>
      </div>
    </form>
  )
}

export default SignIn