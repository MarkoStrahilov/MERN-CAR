import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Container from '../../shared/Container'
import { Carousel } from '../../shared/Carousel'

import useFetch from '../../hooks/useFetch'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/listings.css'

const SingleListing = () => {

  const navigate = useNavigate()
  const {id} = useParams()

  const {data,loading,error} = useFetch(`http://localhost:2000/api/v1/get/car/listing/${id}`)

  const listing = data?.data

  if(error) {
    console.log(error)
  }

  if(loading) {
    return <div>Loading ...</div>
  }


  if(data?.message === "Can't find car listing with provided id") {
   navigate('/explore')
   toast.error("Listing doesn't exist")
  }

  return (
   <div>
          <Carousel images={listing?.images}/>
        <Container>
          <div className="listing-details">
            <h1 className='listing-name'>{listing?.name}</h1>
            <p className="text-dark-500 text-xl italic text-right">{listing?.category}</p>
          </div>
          <div className="mt-10 mb-10">
          <label className="block text-gray-700 text-sm font-bold mb-2">DESCRIPTION</label>
            <p>{listing?.description}</p>
          </div>
        </Container>
   </div> 
  )
}

export default SingleListing