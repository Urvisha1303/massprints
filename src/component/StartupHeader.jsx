import React from 'react'

const StartupHeader = ({headername, headersubname}) => {
  return (
    <div className="w-full h-auto bg-color">
    <div className="h-72 py-20  mx-20 content-center	">
      <div>
        <h1 className="text-right text-5xl uppercase font-bold content-center	 ">
          {headername}
        </h1>
        <p className="text-right text-lg mt-6 font-medium text-slate-600 startupmusic-fontclr">
          {headersubname}
        </p>
      </div>
    </div>
    <div className="mx-20 hrline border-1 ">
      <hr />
    </div>
  </div>
  )
}

export default StartupHeader