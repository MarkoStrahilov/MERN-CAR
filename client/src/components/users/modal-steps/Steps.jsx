import React from 'react'
import { useState } from 'react'
import BasicDetails from './BasicDetails'
import AdvancedDetails from './AdvancedDetails'
import Pricing from './Pricing'
import ListingOverview from './ListingOverview'

const Steps = ({page}) => {

    const [basciDetailsData,setBasicDetailsData] = useState({
        name: "",
        category: "" ,
        type: "" 
    })

    const [advancedDetailsData, setAdvancedDetailsData] = useState({
        description: "",
        images: [],
        features: [],
        guidelines: [],
        insurance: "",
        location: {
            pickup: "",
            return: "",
        }
    })

    const [pricing,setPricing] = useState({
        regularPrice: 0,
        discountedPrice: 0
    })

    const listingData = {
       basicData: basciDetailsData,
       advancedData: advancedDetailsData,
       pricingData: pricing
    }

    const pageDisplay = () => {
       if(page === 0) {
           return <BasicDetails basciDetailsData={basciDetailsData} setBasicDetailsData={setBasicDetailsData}/>
       } else if (page === 1) {
           return <AdvancedDetails advancedDetailsData={advancedDetailsData} setAdvancedDetailsData={setAdvancedDetailsData}/>
       } else if (page === 2) {
        return <Pricing pricing={pricing} setPricing={setPricing}/>
       } else if (page === 3) {
        return <ListingOverview data={listingData}/>
       }
    }

  return (
    <div className="container-steps mt-10">
        {pageDisplay()}
    </div>
  )
}

export default Steps