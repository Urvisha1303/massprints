import React from 'react'

const Contactdetails = () => {
  return (
    <div className="grid grid-cols-0 md:grid-cols-2 gap-4 w-full h-auto mt-12  mb-36">
        <div className="ml-6 md:ml-20 mr-2 md:mr-6 mt-5 d-flex">
          <div className="mb-10 ">
            <h1
              className="uppercase font-bold borderbt"
              style={{ width: "80px" }}
            >
              Contact
            </h1>
            <hr />
            <p className="mt-4 text-sm">
              <span className="font-bold">Tel : </span>
              <span className="formname">020 3818 5750</span>
            </p>
            <p className="mt-2 text-sm">
              <span className="font-bold">Email : </span>
              <span className="emailclr "> YH3p4@example.com</span>
            </p>
            <p className="italic emailclr mt-10">By appointment only</p>
          </div>
        </div>
        <div className=" mr-20 ml-6 leading-10 uppercase">
          <form action="">
            <label htmlFor=" " className="text-sm formname">
              Name (Required)
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-sm inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-sm formname">
              Email (required)
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Email"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-sm inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-sm formname">
              Phone
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Phone"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-sm inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-sm formname">
              Message
            </label>
            <br />

            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="rounded-md w-full h-48 border-x border-y pl-4 box-border text-sm inputnamecl pt-2 max-h-fit uppercase "
            ></textarea>
            <br />
            <button
              type="button"
              className="border-0 hrline font-medium text-sm px-5 py-2.5 me-2 mb-2 uppercase btnsend rounded-sm w-28 h-10"
            >
              send
            </button>
          </form>
        </div>
      </div>
  )
}

export default Contactdetails