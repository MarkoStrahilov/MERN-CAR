import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Verification = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')    
    const [otp, setOtp] = useState('')
    const [statusVerified,setStatusVerified] = useState(false)

  
    const formSubmit = async(e) => {
  
        try {

          e.preventDefault()

            const user = {username,password, otp}
    
            const res =  await axios.post(`http://localhost:2000/api/v1/auth/verify/auth/token/user`, user)

            toast.success('account successfuly verified')

            navigate({
              pathname: `/user/${username}`
            })

        } catch (error) {
            
            toast.error(error)
            navigate({
              pathname: `/user/${username}/verify-account`

            })

        }

    }

  return (
    <form className="w-full max-w-xs" onSubmit={formSubmit}>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp-token">
          Otp Verification Code
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="otp-token" type="text" placeholder="Enter 4 Digit Code" onChange={(e) => setOtp(e.target.value)}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type={'submit'}>
          Verify Account & Sign In
        </button>
      </div>
    </div>
    <p className="text-center text-gray-500 text-xs">
      &copy;2022 Rent My Car. All rights reserved.
    </p>
  </form>
  )
}

export default Verification