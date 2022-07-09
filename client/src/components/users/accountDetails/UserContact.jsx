import React from 'react'
import {Link} from 'react-router-dom'

const UserContact = ({user}) => {

  return (
    <div className='user-contact'>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn m-1">see contact details</label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <Link to={'somewhere'} className='mt-2 mb-2'><b>Email:</b> E-Mail Adress</Link>
              <Link to={'somewhere'} className='mt-2 mb-2'><b>Phone:</b> Phone Number</Link>
            </ul>
        </div>
    </div>
  )
}

export default UserContact