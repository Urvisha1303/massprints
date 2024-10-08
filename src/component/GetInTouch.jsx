import React from "react";

const GetInTouch = ({ name, alignClass, position }) => {
  return (
    <div className="w-full h-auto bg-color mb-20 get-touch-bg-color" style={{backgroundColor:"#131a3c"}}>
      <div className="h-72 py-20 mx-6 md:mx-20 content-center	relative">
        <div>
          <h1
            className={`${alignClass} text-5xl md:text-6xl pt-16 uppercase font-bold content-center text-white`}
          >
            {name}
          </h1>
        </div>
        <hr className={`w-20 md:w-72 absolute top-24 hrline ${position}`} />
      </div>
    </div>
  );
};

export default GetInTouch;
