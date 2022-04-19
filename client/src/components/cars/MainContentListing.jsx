import React from 'react'

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
    </div>
  )
}

export default MainContentListing