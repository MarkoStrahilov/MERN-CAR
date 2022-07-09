import React from 'react'
import Steps from '../modal-steps/Steps'
import { useState } from 'react'

const CreateListingInSteps = () => {

  const [page,setPage] = useState(0)
  const titles = ['basic', 'more', 'pricing', 'overview']

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
          <div className='flex justify-evenly mt-10 pl-4 pr-4'>
          <div>
                 <button className='btn btn-sm bg-sky-600' disabled={page === 0}  onClick={() => {setPage((curr) => curr - 1)}}>back</button>
          </div>
            <div>
            <button className='btn btn-sm bg-sky-600' onClick={() => {
              if(page === titles.length - 1) {
                  alert('success')
              } else {
                setPage(curr => curr + 1)
              }
            }}>{page === titles.length - 1 ? "create" : "next"}</button>
            </div>
          </div>
          </label>
      </label>
    </div>
</div>
  )
}

export default CreateListingInSteps