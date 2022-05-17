import React from 'react'
import Select from 'react-select'
import '../../../assets/modelSteps.css'


const AdvancedDetails = ({advancedDetailsData,setAdvancedDetailsData}) => {
 
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description" type="text" value={advancedDetailsData.description} onChange={(e) => {setAdvancedDetailsData({
        ...advancedDetailsData,
        description: e.target.value
      })}}/>
    </div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm mb-2" for="insurance">
        Insurance
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="insurance" type="text" value={advancedDetailsData.insurance} onChange={(e) => {setAdvancedDetailsData({
        ...advancedDetailsData,
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