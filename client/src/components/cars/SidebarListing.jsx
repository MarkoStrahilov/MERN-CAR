import React from 'react'
import moment from 'moment'

import '../../assets/listings.css'

const SidebarListing = ({user, price}) => {

  console.log(price)

    return (
    <div className='sidebar-listing'>
        <h1 className='mt-7 text-3xl'>About The Host</h1>
    <div className="flex items-center pt-10 py-4">
      <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt=""/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none mb-1">{user?.username}</p>
        <p className="text-gray-600">Joined <b>{moment(user?.createdAt).format('LL')}</b></p>
      </div>
    </div>
    <div className="pt-10 py-4">
        <h1 className='text-gray-700 font-bold text-xl'>CAR PRICING</h1>
        {price && price?.type === 'sale' ? 
        <div className=''>
              <h1 className='text-3xl'>${price?.regularPrice} <span className='text-gray-700 text-sm font-bold'>SALE PRICE</span></h1>
        </div>
         : 
         <div className='mt-5'>
           <div class="flex w-full">
              <div class="grid pt-2 pb-2 flex-grow card bg-base-100 rounded-box place-items-start"><h1 className='text-3xl'>${price?.regularPrice} <span className='text-gray-700 text-sm font-bold'>PER DAY</span></h1></div>
               <div class="divider divider-horizontal"/>
              <div class="grid pt-2 pb-2 flex-grow card bg-base-100 rounded-box place-items-start">{price?.offer === true ? 
              <div className='flex items-center'> 
                <h1 className='text-3xl'>${price?.discountedPrice} <span className='text-gray-700 text-sm font-bold'>PER DAY</span>
                </h1>
                <div className="badge-success text-xs text-center badge-offer-av">AVAILABLE OFFER</div>
                </div>
               : 
               <div>
                  <span className='text-gray-700 text-xl font-bold'>OFFER NOT AVAILABLE</span>
                </div>}
                 </div>
            </div>
         </div>
         }
    </div>
    </div>
  )
}

export default SidebarListing