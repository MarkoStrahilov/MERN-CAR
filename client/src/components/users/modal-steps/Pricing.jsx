import React from 'react'

const Pricing = ({pricing, setPricing}) => {
  return (
    <div>
        <h1 className='font-bold'>Listing Pricing</h1>
        <div class="mb-4 mt-5">
            <label class="block text-gray-700 text-sm mb-2" for="r-price">
                Listing Price
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="r-price" type="text" value={pricing.regularPrice} onChange={(e) => {setPricing({
            ...pricing,
            regularPrice: e.target.value
            })}}/>
        </div>
        <div class="mb-4 mt-5">
            <label class="block text-gray-700 text-sm mb-2" for="d-price">
                Discounted Price
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="d-price" type="text" value={pricing.discountedPrice} onChange={(e) => {setPricing({
            ...pricing,
            discountedPrice: e.target.value
            })}}/>
        </div>
    </div>
  )
}

export default Pricing