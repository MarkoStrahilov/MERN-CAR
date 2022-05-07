import React from 'react'

const CreateListingInSteps = () => {
  return (
  <div>
    <div className="modal-holder">
       <label for="my-modal-4" class="btn modal-button bg-sky-600">Create Listing</label>
          <input type="checkbox" id="my-modal-4" class="modal-toggle" />
          <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
          <ul class="steps">
            <li class="step step-info">Basic Details</li>
            <li class="step">More Details</li>
            <li class="step">Pricing</li>
            <li class="step">Lising Overview</li>
          </ul>
            <div className="container-steps mt-10">
              content
            </div>  
          </label>
      </label>
    </div>
</div>
  )
}

export default CreateListingInSteps