import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'

const ListingType = ({query}) => {

  const {data,error,loading} = useFetch(`http://localhost:2000/api/v1/get/listing/type/${query}`)

  const listings = data?.data?.foundCars
  console.log(listings)

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    console.log(error)
  }

  return (
    <div>
      <h1>Explore Car Listings For {query}</h1>
      <div> listingType, {query}</div>
      {listings && listings.map((list) => (
        <div key={list._id}>
          {list.name}
         </div> 
      ))}
    </div>
  )
}

export default ListingType