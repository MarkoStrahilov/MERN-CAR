import React from 'react'
import {HiLocationMarker,HiOutlineLocationMarker} from 'react-icons/hi'
import {BiCurrentLocation} from 'react-icons/bi'

import AdvDetails from './AdvDetails'
import '../../assets/listings.css'

const MainContentListing = ({data}) => {

  return (
    <div className='main-content-listing'>
        <h1 className='listing-name'>{data?.name}</h1>
        <p className='listing-category'>{data?.category.toUpperCase()}</p>
        <div className="mt-10 mb-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">DESCRIPTION</label>
            <p>{data?.description}</p>
        </div>
        <div className="mt-10 mb-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">CAR INSURENCE</label>
          <p className='text-[#898989]'>Insurance Available - {data?.insurance}</p>
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2">WHAT DOES THE CAR OFFER</label>
       <div className="listing-adv flex items-center justify-around mt-10 mb-10">
       <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">FEATURES</label>
          <div className="listing-adv-details">
          {data?.features && data.features.map((feature) => (
            <AdvDetails detail={feature} key={feature}/>
        ))}
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">GUIDELINES</label>
        <div className="listing-adv-details">
         {data?.guidelines && data.guidelines.map((guide) => (
               <AdvDetails detail={guide} key={guide}/>
        ))}
        </div>
        </div>
       </div>
        <div className="mt-10 mb-6 flex items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <BiCurrentLocation size={30} style={{marginLeft: '.5rem', marginBottom: '.5rem'}}/>
        </div>
        <div className="flex items-center justify-around">
          <div className='flex items-center'>
          <HiOutlineLocationMarker size={30}/>
          Location Pickup - {data?.location?.pickup}
          </div>
          <div className='flex items-center'>
          <HiLocationMarker size={30}/>
          Location Return - {data?.location?.return}
          </div>
        </div>
    </div>
  )
}

export default MainContentListing