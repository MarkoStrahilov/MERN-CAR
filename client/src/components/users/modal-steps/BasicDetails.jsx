import React from 'react'

const BasicDetails = ({listingDetailsData,setListingDetailsData}) => {

  return (
    <div>
        <h1 className='font-bold'>Basic Details</h1>
        <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="name">
        Listing  Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={listingDetailsData.name} onChange={(e) => {setListingDetailsData({
        ...listingDetailsData,
        name: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="category">
        Listing Category
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" value={listingDetailsData.category} onChange={(e) => {setListingDetailsData({
        ...listingDetailsData,
        category: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="type">
        Listing Type
      </label>  
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" value={listingDetailsData.type} onChange={(e) => {setListingDetailsData({
        ...listingDetailsData,
        type: e.target.value
      })}}/>
    </div>
    </div>
  )
}

export default BasicDetails