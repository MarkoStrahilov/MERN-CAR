import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SingleListing from './SingleListing'

const CarListing = () => {
  return (
    <div className='listing-container'>
        <Router>
            <Routes>
                <Route path='/car-listing:id' element={<SingleListing />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default CarListing