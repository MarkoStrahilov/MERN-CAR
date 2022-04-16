import {React, useState} from 'react'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import '../assets/listings.css'

export const Carousel = ({images}) => {

  const [current,setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


  return (

    <div className="carousel-container">
    {Array.isArray(images) && images.map((image,index) => (
      <div className={current === index ? 'active' : 'inactive'} key={index}>
        <img src={image} alt="" className='listing-image' />
      </div>
    ))}
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
  </div>

  )
}
