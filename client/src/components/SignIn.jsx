import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/registerBackground.jpg'
import PhoneMockup from '../shared/PhoneMockup'
import axios from 'axios'


// styles
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../assets/auth.css'


const SignIn = () => {

const navigate = useNavigate()

  const styles = {
    width:"100%",
    height: "100vh",
    backgroundImage:  "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
}

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')


const onSubmit = async(e) => {
e.preventDefault()

try {
  
  const user = {username,password}
 
 await axios.post('http://localhost:2000/api/v1/auth/login/user', user)


 toast.success('successfuly logged in')

  navigate({
    pathname: `/user/${username}`
  })

} catch (error) {

    toast.error('incorrect user credentials')
    navigate({
      pathname: `/sign-in`
    })
}

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
              <span className="label-text">Username</span>
            </label>
            <input type="text" id='username' className="input input-bordered input-accent w-full max-w-xs" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='register-password'>
              <span className="label-text">Password</span>
            </label>
            <input type="password" id='password' className="input input-bordered input-accent w-full max-w-xs" value={password}  onChange={(e) => setPassword(e.target.value)}/>
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