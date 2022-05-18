import React from 'react'

const Pricing = ({listingDetailsData,setListingDetailsData}) => {
  return (
    <div>
        <h1 className='font-bold'>Listing Pricing</h1>
        <div class="mb-4 mt-5">
            <label class="block text-gray-700 text-sm mb-2" for="r-price">
                Listing Price
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="r-price" type="text" value={listingDetailsData.regularPrice} onChange={(e) => {setListingDetailsData({
            ...listingDetailsData,
            regularPrice: e.target.value
            })}}/>
        </div>
        <div class="mb-4 mt-5">
            <label class="block text-gray-700 text-sm mb-2" for="d-price">
                Discounted Price
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="d-price" type="text" value={listingDetailsData.discountedPrice} onChange={(e) => {setListingDetailsData({
            ...listingDetailsData,
            discountedPrice: e.target.value
            })}}/>
        </div>
    </div>
  )
}

export default Pricing