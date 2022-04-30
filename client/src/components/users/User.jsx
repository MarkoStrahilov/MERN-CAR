import {useState, useEffect} from 'react'
import { Link,Navigate,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

import ProfileHeading from './accountDetails/ProfileHeading';
import ProfileMain from './accountDetails/ProfileMain';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const User = () => {

  const navigate = useNavigate()
  const {username} = useParams()


  const {data,error,loading} = useFetch(`http://localhost:2000/api/v1/user/${username}`)

  const user = data?.data?.foundUser

  const logout = async() => {
    
    try {

      await axios.get('http://localhost:2000/api/v1/auth/logout/user')
      
      toast.success('successfuly logged out')
      navigate({pathname: "/sign-in"})

    } catch(error) {

      toast.error('oops something went wrong')

    }
  }

  if(loading) {
   return <h1>Loading ...</h1> 
  }

  if(error) {
    return toast.error(error)
  }

 return (
   <div className='app-user'>
    <ProfileHeading info={user}/>
    <ProfileMain info={user}/>
   </div>
 )
}

export default User

