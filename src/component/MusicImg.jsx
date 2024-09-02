import React from 'react'

const MusicImg = ({musicimg}) => {
  return (
    <section className="text-gray-600 body-font">
    <div className=" mx-20 flex flex-col justify-center items-center">
      <img
        className=" mb-10 object-cover object-center rounded"
        alt="hero"
        src={musicimg}
      />
    </div>
  </section>
  )
}

export default MusicImg