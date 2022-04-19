import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Container from '../../shared/Container'
import { Carousel } from '../../shared/Carousel'
import MainContentListing from './MainContentListing'
import SidebarListing from './SidebarListing'

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
   <>
          <Carousel images={listing?.images}/>
        <Container>
          <MainContentListing data={listing}/>
          <SidebarListing user={listing?.owner}/>
        </Container>
   </> 
  )
}

export default SingleListing