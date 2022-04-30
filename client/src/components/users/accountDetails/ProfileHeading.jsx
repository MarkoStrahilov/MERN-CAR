import React from 'react'
import moment from 'moment'

import '../../../assets/user.css'

const ProfileHeading = ({info}) => {
  return (
    <div className='user-heading-section'>
      <div className='user-heading' />
      <div className="user-personal-info">
       <div className='user-df-info'>
       <img src={'https://www.clipartmax.com/png/middle/296-2969961_no-image-user-profile-icon.png'} className='profile-img' alt="user" />
        <div>
        <p className='font-bold text-2xl mb-1'>{info?.username}</p>
          Joined {moment(info?.createdAt).format('LL')}
        </div>
       </div>
        <button className='btn-contact-user btn bg-sky-600'>contact</button>
      </div>
    </div>
  )
}

export default ProfileHeading