import React from 'react'
import {useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Navbar = () => {

  let navigate = useNavigate()

  return (
    <nav className='app-navbar'>
        <div className="drawer w-full" style={{'maxHeight': '200px'}}>
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        <div className='nav-logo-wrapper'>
        <img src={logo} alt="logo" className='app-logo mask mask-circle'/>
        <h1 className='app-name'>Rent My Car</h1>
        </div>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal p-0 mr-5">
          <li><div onClick={() => navigate('/explore')}>Cars</div></li>
          <li><div onClick={() => navigate('/offers')}>Offers</div></li>
          <li tabIndex="0">
        <div>
          Settings
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </div>
        <ul className="p-2 bg-base-100">
          <li><div onClick={() => navigate('/settings')}>Account</div></li>
          <li><div onClick={() => navigate('/me')}>My Profile</div></li>
        </ul>
      </li>
    </ul>
      </div>
    </div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
      <li><div onClick={() => navigate('/explore')}>Cars</div></li>
      <li><div onClick={() => navigate('/offers')}>Offers</div></li>
    </ul>
  </div>
</div>
    </nav>
  )
}

export default Navbar