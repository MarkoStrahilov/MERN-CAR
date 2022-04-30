import React from 'react'

const ProfileMain = ({info}) => {

  console.log(info)

  return (
    <div className='container mx-auto'>
       {info?.carListings.length !== 0 ? <p>see {info?.username}'s available car listings</p> : <p>{info?.username} doesn't have listings available</p>}
      {info?.carListings.length !== 0 && info.carListings.map((listing) => (
        <div className='card'>
          <p className='mt-5 mb-5'>user listings</p>
          <h1>{listing?.name}</h1>
        </div>  
      ))}
    </div>
  )
}

export default ProfileMain