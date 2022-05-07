import React from 'react'
import {Link} from 'react-router-dom'
import CreateListingInSteps from './CreateListingInSteps'

const ProfileMain = ({info}) => {

  return (
    <div className='container mx-auto mt-20'>
      <div className="flex justify-end">
      <CreateListingInSteps />
      </div>
       {info?.carListings.length !== 0 ? <p className='text-5xl mb-10'>See {info?.username}'s available car listings</p> : <p className='text-5xl'>{info?.username} doesn't have listings available</p>}
      <div className="user-details-listing-card flex flex-wrap">
      {info?.carListings.length !== 0 && info.carListings.map((listing) => (
        <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-5" key={listing?._id}>
        <figure><img src={listing?.images[0]} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{listing?.name}</h2>
          <p>{listing?.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/car-listing/${listing?._id}`} className="btn btn-primary">Visit Listing</Link>
          </div>
        </div>
      </div>  
      ))}
      </div>
    </div>
  )
}

export default ProfileMain