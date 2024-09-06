import React from 'react'

const DetailsSection = ({image, description}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
        <div className=" py-24 mx-16">
          <div className=" mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-96 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 self-center text-sm leading-6 text-black	">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default DetailsSection