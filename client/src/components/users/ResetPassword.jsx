import React from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'


import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {

    const {resetToken} = useParams()
    const navigate = useNavigate()

  const [newPassword,setNewPassword] = useState('')
  const [retypeNewPassword,setRetypeNewPassword] = useState('')

   const submitPasswordReset = async(e) => {
    
    try {

      e.preventDefault()

      const newCredentails = {newPassword, retypeNewPassword}
  
     const res = await axios.patch(`http://localhost:2000/api/v1/auth/password/reset/${resetToken}`, newCredentails)

      console.log(res)

     if(res.data.status === 'success') {

      toast.success(res.data.message)
      navigate({pathname: "/sign-in"})

     }
     
  
    } catch (error) {
      
      toast.error('something went wrong due to unmatching passwords or expired token')

    }

   }

  return (
    <form onSubmit={submitPasswordReset}>
        <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='newPassword'>
              <span className="label-text">New Password</span>
            </label>
            <input type="password" id='newPassword' className="input input-bordered input-accent w-full max-w-xs" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor='retypeNewPassword'>
              <span className="label-text">New Password</span>
            </label>
            <input type="password" id='retypeNewPassword' className="input input-bordered input-accent w-full max-w-xs" value={retypeNewPassword} onChange={(e) => setRetypeNewPassword(e.target.value)}/>
        </div>
        <button className='btn mt-5'>Change Password</button>
    </form>
  )
}

export default ResetPassword