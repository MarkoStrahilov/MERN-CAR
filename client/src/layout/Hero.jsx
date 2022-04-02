import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  let navigate = useNavigate()

  return (
    <div className='app-hero'>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Ready,set,go!</h1>
                        <p className="py-6">Need a car? Oh, you’ve come to the right place. Book cars on demand by the hour or day. Join instantly, drive in minutes...</p>
                        <button className="btn btn-accent" onClick={() => navigate('/sign-up')}>Get Started</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Hero