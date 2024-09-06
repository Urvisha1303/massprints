import React from 'react'
import './EnquiryForm.css'

const EnquiryForm = () => {
  return (
    <div className="mx-16 my-20">
    <h1 className="uppercase text-xl font-bold px-6 py-2 w-full h-auto bg-blue-600	text-white mb-4">
      Make an Enquiry
    </h1>
    <div className="grid grid-cols-3 gap-4 w-full h-auto mt-12 mb-36">
      <div className="col-span-2 mr-20 ml-6 leading-10 uppercase">
        <form action="">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-md w-full h-10 border-x border-y pl-4 box-border text-sm inputnamecl mb-4 uppercase " 
            
          />
          <input
            type="text"
            placeholder="Your Email"
            className="rounded-md w-full h-10 border-x border-y pl-4 box-border text-sm inputnamecl mb-4 uppercase"
          />

          <input
            type="text"
            placeholder="Your Phone"
            className="rounded-md w-full h-10 border-x border-y pl-4 box-border text-sm inputnamecl mb-4 uppercase"
          />

          <input
            type="text"
            placeholder="Delivery Address"
            className="rounded-md w-full h-10 border-x border-y pl-4 box-border text-sm inputnamecl mb-4 uppercase"
          />
          <textarea
            name=""
            id=""
            placeholder="Your order details"
            className="rounded-md w-full h-48 border-x border-y pl-4 box-border text-sm inputnamecl pt-2 max-h-fit uppercase"
          ></textarea>
          <br />
          <input
            type="file"
            className="w-full h-10 border-x border-y pl-4 box-border pt-2 text-sm inputnamecl mb-2 uppercase "
          />
          <br />
          <button
            type="button"
            className="text-white bg-blue-700 hrline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase btnsend"
          >
            Send Order
          </button>
        </form>
      </div>
      <div className="col-span-1 mr-6 mt-5 d-flex">
        <div className="mb-14">
          <h1
            className="uppercase font-bold borderbt pb-4 text-xl"
            style={{ width: "210px" }}
          >
            NEED HELP? CALL US!
          </h1>
          <hr />
          <p className="mt-4 text-sm">
            Call on 
            <span className="formname emailclr font-bold">
              020 3818 5750 {" "}
            </span>
            or
          </p>
          <p className="mt-2 text-sm">
            <span>email us on </span>
            <span className="emailclr font-bold"> YH3p4@example.com</span>
          </p>
          <p className=" mt-10">We would be honoured to help</p>
          <a
            href="mailto:info@thelondonprinters.co.uk"
            className="whitecolorfont dark:hover:text-white"
          >
            <i className="fa-solid fa-envelope footerfontcolor"></i>
            <span className="sr-only">Twitter page</span>

            <button
              type="button"
              className="text-white bg-blue-700 mt-8 hrline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
            >
              Contact <i className="fa-regular fa-envelope pl-4"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EnquiryForm