import React from "react";

const BenifitMail = ({ mailIcon, mailName, mailDetails }) => {
  return (
    <div className="p-4 w-1/4 mb-14 flex">
          <div className="flex rounded-lg h-full flex-col">
            <div className="flex items-center mb-6 tracking-widest">
              <div className="w-16 h-16 ml-2 inline-flex items-center justify-center fontclrh2  text-3xl  fonthover">
                <i className={mailIcon}></i>
              </div>
              <h2 className="text-lg uppercase text-black font-medium ml-4">
                {mailName}
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-sm leading-7">{mailDetails}</p>
            </div>
          </div>
          </div>
        
  
  );
};

export default BenifitMail;
