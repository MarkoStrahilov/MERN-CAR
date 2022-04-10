import React from 'react'
import { useParams } from 'react-router-dom'

// treba prvo da se prikazhuvaat na toj user toj listing ili vo offers / rent i sale page
// pa so map() da se prikazhat tie listings i da se zeme nivniot id
// pa so pritiskanje na kopcheto kje go donese na toj listing

import useFetch from '../../hooks/useFetch'

const SingleListing = () => {

  const {id} = useParams()

  const {data,loading,error} = useFetch(`http://localhost:2000/api/v1/get/car/listing/${id}`)

  console.log(data)

  return (
    <div>singleListing</div>
  )
}

export default SingleListing