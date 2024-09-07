import React from 'react'

const HeaderSection = ({name}) => {
  return (
    <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	fontclr  ">
              {name}
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline ">
          <hr />
        </div>
      </div>
  )
}

export default HeaderSection