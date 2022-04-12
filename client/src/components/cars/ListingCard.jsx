import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import '../../assets/listings.css'

const ListingCard = ({details, img}) => {

  const carCreatedAt = moment(details.createdAt).calendar()

  const listingDesc = details?.description

  const limitedText = listingDesc.substring(0, 150) + "..."
  
  return (
  <div class="card w-96 bg-base-100 shadow-xl ml-4 listing-card">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=250" className='listing-card-img' alt="car listing card" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {details?.name}
    </h2>
    <p>{limitedText}</p>
    <div class="card-actions justify-end mt-4">
      <div class="badge badge-outline">for "{details?.listingType}"</div> 
      {details?.offer === true ? (
        <>
          <div class="badge badge-outline">Regular Price "${details?.regularPrice}"</div>
          <div class="badge badge-outline">Discount Price "${details?.discountedPrice}"</div>
        </>
      ): <div class="badge badge-outline">Regular Price "${details?.regularPrice}"</div>}
    </div>
    <Link className='text-right mt-7 text-sky-500 hover:text-sky-600' to={`/car-listing/${details?._id}`}>Visit Listing</Link>
  </div>
</div>
  )
}

export default ListingCard