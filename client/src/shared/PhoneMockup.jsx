import React from 'react'

const PhoneMockup = ({url}) => {
  return (
    <>
        <div className="mockup-phone border-accent">
            <div className="camera"></div> 
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <img src={url} alt="register img" className='sign-img' />
                    </div>
                </div>
        </div>
    </>
  )
}

export default PhoneMockup