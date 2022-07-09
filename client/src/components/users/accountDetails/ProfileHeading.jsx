import React from 'react'
import moment from 'moment'

import UserContact from './UserContact'

import '../../../assets/user.css'

const ProfileHeading = ({info}) => {
  return (
    <div className='user-heading-section'>
      <div className='user-heading' />
      <div className="user-personal-info">
       <div className='user-df-info'>
       <img src={'https://www.clipartmax.com/png/middle/296-2969961_no-image-user-profile-icon.png'} className='profile-img' alt="user" />
        <div>
        <h1 className='font-bold text-2xl mb-1'>{info?.username}</h1>
          Joined {moment(info?.createdAt).format('LL')}
        </div>
       </div>
        <UserContact user={info}/>
      </div>
    </div>
  )
}

export default ProfileHeading