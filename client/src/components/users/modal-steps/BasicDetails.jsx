import React from 'react'
import { useState } from 'react'

const BasicDetails = ({basciDetailsData,setBasicDetailsData}) => {

  return (
    <div>
        <h1 className='font-bold'>Basic Details</h1>
        <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="name">
        Listing  Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={basciDetailsData.name} onChange={(e) => {setBasicDetailsData({
        ...basciDetailsData,
        name: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="category">
        Listing Category
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" value={basciDetailsData.category} onChange={(e) => {setBasicDetailsData({
        ...basciDetailsData,
        category: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="type">
        Listing Type
      </label>  
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" value={basciDetailsData.type} onChange={(e) => {setBasicDetailsData({
        ...basciDetailsData,
        type: e.target.value
      })}}/>
    </div>
    </div>
  )
}

export default BasicDetails