import {useState, useEffect} from 'react'
import { Link,Navigate,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'


import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const User = () => {

  const navigate = useNavigate()

  const logout = async() => {
    
    try {

      await axios.get('http://localhost:2000/api/v1/logout/user')
      
      toast.success('successfuly logged out')
      navigate({pathname: "/sign-in"})

    } catch(error) {

      toast.error('oops something went wrong')

    }
  }

 return (
   <div className='app-user'>
     <p className='font-bold'>My Profile</p>
     <button className='btn btn-accent' onClick={logout}>Logout</button>
   </div>
 )
}

export default User