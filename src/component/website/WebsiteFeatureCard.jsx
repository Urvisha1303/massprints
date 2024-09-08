import React from 'react'

const WebsiteFeatureCard = ({cardName ,cardDetails, cardIcon}) => {
  return (
    <div className="p-4 md:w-1/3 mb-14">
    <div className="flex rounded-lg h-full flex-col">
      <div className="flex items-center mb-6 tracking-widest">
        <div className="w-16 h-16 ml-2 inline-flex items-center justify-center fontclrh2  text-3xl  fonthover">
          <i className={cardIcon}></i>
        </div>
        <h2 className="text-lg uppercase fontclrh2 font-medium ml-4">
          {cardName}
        </h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-lg md:text-sm  leading-7">
          {cardDetails}
        </p>
      </div>
    </div>
  </div>
  )
}

export default WebsiteFeatureCard;