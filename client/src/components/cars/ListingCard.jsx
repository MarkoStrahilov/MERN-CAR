import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import '../../assets/listings.css'

const ListingCard = ({details, img}) => {

  const carCreatedAt = moment(details.createdAt).calendar()

  const limitedText = details?.description.substring(0, 150) + "..."
  console.log(details)
  return (
<Link class="max-w-sm rounded overflow-hidden shadow-lg" to={`/car-listing/${details?._id}`}>
  <img class="w-full" src={img} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{details?.name}</div>
    <p class="text-gray-700 text-base">
      {limitedText}
    </p>
  </div>
  <div class="flex items-center px-6 py-4">
      <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt=""/>
      <div class="text-sm">
        <p class="text-gray-900 leading-none mb-1">{details?.owner?.username}</p>
        <p class="text-gray-600">Joined <b>{moment(details?.createdAt).format('LL')}</b></p>
      </div>
    </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{details?.category}</span>
    {details?.offer === true ? (
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Offer Available <div class="badge badge-xs bg-green-500 pt-2"></div></span>
    ):  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{details?.listingType === 'sale' ? `for sale $${details?.regularPrice}` : `for rent $${details?.regularPrice}`}</span>}
  </div>
</Link>
  )
}

export default ListingCard