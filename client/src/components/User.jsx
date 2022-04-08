import {useState, useEffect} from 'react'
import { Link,Navigate,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'
import useFetch from '../hooks/useFetch'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const User = () => {

  const navigate = useNavigate()
  const {username} = useParams()


  const {data,error,loading} = useFetch(`http://localhost:2000/api/v1/user/${username}`)

  const user = data?.data

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

  if(user?.isVerified !== true ) {

    toast.error("account is not verified or doesn't exist")
    return navigate({
      pathname: `/sign-in`

    })

  }

 return (
   <div className='app-user'>
     <p className='font-bold'>My Profile</p>
     <p>{user.username}</p>
     <button className='btn btn-accent' onClick={logout}>Logout</button>
   </div>
 )
}

export default User



    // useEffect(() => {

    //    const getUserData = async () => {
    //     const res = await axios.get(`http://localhost:2000/api/v1/user/${username}`)
    //     setUser(res.data)
    //     setLoading(false)
    //    }

    //    getUserData()

    // }, [username])