import React from 'react'

const ListingOverview = ({data}) => {

  console.log(data)

  return (
    <div>
      <h1 className='text-center font-bold'>ListingOverview</h1>

        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Name</label>
          <p className='text-[#898989]'>{data?.name}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Category</label>
          <p className='text-[#898989]'>{data?.category}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Type</label>
          <p className='text-[#898989]'>For {data?.type}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Description</label>
          <p className='text-[#898989]'>{data?.description}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Description</label>
          <p className='text-[#898989]'>{data?.description}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Insurance</label>
          <p className='text-[#898989]'>{data?.insurance}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Regular Price</label>
          <p className='text-[#898989]'>{data?.regularPrice}</p>
        </div>
        <div className="mt-5 mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-1">Discount</label>
          <p className='text-[#898989]'>{data?.discountedPrice}</p>
        </div>
    </div>

  )
}

export default ListingOverview