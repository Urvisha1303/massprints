import React from 'react'

const HeadingContent = ({headername,textTranform}) => {
  return (
    <div className="mx-16 mt-16 mb-10">
    <h1 className={`${textTranform} text-lg font-bold px-6 py-4 w-full h-auto bg-black	text-white mb-4 tracking-widest `} >
    {headername}
    </h1>
  </div>
  )
}

export default HeadingContent