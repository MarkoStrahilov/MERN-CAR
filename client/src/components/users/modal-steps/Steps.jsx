import React from 'react'
import { useState } from 'react'
import BasicDetails from './BasicDetails'
import AdvancedDetails from './AdvancedDetails'
import Pricing from './Pricing'
import ListingOverview from './ListingOverview'

import  '../../../assets/modelSteps.css'

const Steps = ({page}) => {

    const [listingDetailsData,setListingDetailsData] = useState({
        name: "",
        category: "" ,
        type: "",
        description: "",
        images: [],
        features: [],
        guidelines: [],
        insurance: "",
        location: {
            pickup: "",
            return: "",
        },
        offer: "",
        regularPrice: 0,
        discountedPrice: 0
    })

    const pageDisplay = () => {
       if(page === 0) {
           return <BasicDetails listingDetailsData={listingDetailsData} setListingDetailsData={setListingDetailsData}/>
       } else if (page === 1) {
           return <AdvancedDetails listingDetailsData={listingDetailsData} setListingDetailsData={setListingDetailsData}/>
       } else if (page === 2) {
        return <Pricing listingDetailsData={listingDetailsData} setListingDetailsData={setListingDetailsData}/>
       } else if (page === 3) {
        return <ListingOverview data={listingDetailsData}/>
       }
    }

  return (
    <div className="container-steps mt-10">
        {pageDisplay()}
    </div>
  )
}

export default Steps