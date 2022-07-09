import React from 'react'
import Select from 'react-select'
import '../../../assets/modelSteps.css'
const algoliasearch = require('algoliasearch')
const client = algoliasearch('SI0OK3V86T', '442f43aabbd2061676b51781fe195df3')
const index = client.initIndex('test_index')
const record = { objectID: 1, name: 'test_record' }




const AdvancedDetails = ({listingDetailsData,setListingDetailsData}) => {
 
  const featureOptions = [
    { value: 'Extra Dors', label: 'Extra Doors' },
    { value: 'Extra Seats', label: 'Extra Seats' },
    { value: 'Gas', label: 'Gas' }, 
    { value: 'More Power', label: 'More Power' }
  ]

  const guidelinesOptions = [
    { value: 'No Smoking', label: 'No Smoking' },
    { value: 'No Pets', label: 'No Pets' },
    { value: 'No Eating', label: 'No Eating' }
  ]

  index.saveObject(record).wait()

  index
  .search('test_record')
  .then(({ hits }) => console.log(hits[0]))

  return (

    <div>
        <h1 className='font-bold'>Advanced Details</h1>
        <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="description">
        Listing  Description
      </label>
      <textarea className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description" type="text" value={listingDetailsData.description} onChange={(e) => {setListingDetailsData({
        ...listingDetailsData,
        description: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="insurance">
        Insurance
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="insurance" type="text" value={listingDetailsData.insurance} onChange={(e) => {setListingDetailsData({
        ...listingDetailsData,
        insurance: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
    <Select options={featureOptions} isMulti autoFocus isSearchable placeholder={"Select Features ..."}/>
    </div>
    <div class="mb-4 mt-5">
    <Select options={guidelinesOptions} isMulti autoFocus isSearchable placeholder={"Select Guidelines ..."}/>
    </div>
    <div class="mb-4 mt-5">
     <span class="btn btn-default btn-file">
      Select Images <input type="file" />
     </span>
    </div>
    </div>
  )

}

export default AdvancedDetails