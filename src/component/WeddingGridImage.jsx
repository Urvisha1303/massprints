import React from 'react'

const WeddingGridImage = ({gridImage}) => {
  return (
    
     <>
      <div className="lg:w-1/3 md:w-1/2 p-2 w-full">
        <a className="block relative h-96 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={gridImage}
          />
        </a>
      </div>
      
     </>
  

  )
}

export default WeddingGridImage