import React from 'react'

const StartupDetails = ({details ,image}) => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-start">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-auto overflow-hidden">
                <img
                  alt="content"
                  className="h-full w-full mt-36"
                  src={image}
                />
                
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <p className="text-sm leading-7 startupmusic-fontclr">
                {details}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default StartupDetails