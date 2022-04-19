import React from 'react'

import '../assets/listings.css'

const Container = ({children}) => {
  
  return (
    <div className='car-listing-container'>{children}</div>
  )

}

export default Container