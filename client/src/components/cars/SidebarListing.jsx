import React from 'react'
import moment from 'moment'

const SidebarListing = ({user}) => {
    return (
    <div className='sidebar-listing'>
        <h1 className='mt-7 text-3xl'>About The Host</h1>
    <div className="flex items-center pt-10 py-4">
      <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt=""/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none mb-1">{user?.username}</p>
        <p className="text-gray-600">Joined <b>{moment(user?.createdAt).format('LL')}</b></p>
      </div>
    </div>
    </div>
  )
}

export default SidebarListing