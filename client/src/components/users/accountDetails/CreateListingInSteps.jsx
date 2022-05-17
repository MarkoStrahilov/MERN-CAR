import React from 'react'
import Steps from '../modal-steps/Steps'
import { useState } from 'react'

const CreateListingInSteps = () => {

  const [page,setPage] = useState(0)

  return (
  <div>
    <div className="modal-holder">
       <label for="my-modal-4" class="btn modal-button bg-sky-600">Create Listing</label>
          <input type="checkbox" id="my-modal-4" class="modal-toggle" />
          <label for="my-modal-4" class="modal cursor-pointer">
          <label className="modal-box relative" for="">
          <ul className="steps">
            <li className={`step ${page === 0 ? 'step-info' : null}`}>Basic Details</li>
            <li className={`step ${page === 1 ? 'step-info' : null}`}>More Details</li>
            <li className={`step ${page === 2 ? 'step-info' : null}`}>Pricing</li>
            <li className={`step ${page === 3 ? 'step-info' : null}`}>Lising Overview</li>
          </ul>
          <Steps page={page}/>
          <div className='flex justify-evenly mt-8 pl-4 pr-4'>
          {page <=3 && page !== -1 && (
            <div>
                <button className='btn btn-sm bg-sky-600'  onClick={() => {setPage((curr) => curr - 1)}}>Back</button>
            </div>
          )}
            {page <= 3 && (
            <div>
                 <button className='btn btn-sm bg-sky-600'  onClick={() => {setPage((curr) => curr + 1)}}>Next</button>
             </div>
  
          )}
          </div>
          </label>
      </label>
    </div>
</div>
  )
}

export default CreateListingInSteps