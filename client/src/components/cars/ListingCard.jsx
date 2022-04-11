import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import '../../assets/listings.css'

const ListingCard = ({details, img}) => {

  
  let newCarDate = new Date(Date.now() + 2 * (60 * 60 * 1000))
  
  const newFomattedDate = moment(newCarDate).format("HH:mm")
  const listingCreatedDate = moment(details.createdAt).format("HH:mm")
  

  // mozhe da se napravi kako posted on + datumot

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl listing-card" key={details?._id}>
    <figure><img src={img} alt="car listing" /></figure>
      <div className="card-body">
        <h2 className="card-title">{details?.name}</h2>
        <p>{details?.description}</p>
        {newFomattedDate > listingCreatedDate ? <b>New Car</b> : <p className='hidden'></p>}
      <div className="card-actions justify-end">
      <Link className='btn btn-primary' to={`/car-listing/${details?._id}`}>Visit Listing</Link>
    </div>
    </div>
  </div>
  )
}

export default ListingCard