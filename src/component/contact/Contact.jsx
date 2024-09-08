import React from "react";
import "./Contact.css";
import Map from "../Map";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-96 sm:mx-16 content-center margin">
          <div>
            <h1 className="text-right text-5xl uppercase font-bold content-center sm:px-16 md:px-0 fontclr fonttext">
              Let's Get <br />
              Connected
            </h1>
          </div>
        </div>
        <div className="mx-4 sm:mx-20 md:mx-16 pd-10 hrline border-0">
          <hr />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 w-full h-auto mt-12 sm:mx-10 md:ml-16  mb-12">
        <div className="mx-6 mt-5 d-flex ">
          <div className="mb-10 ">
            <h1
              className="uppercase font-bold borderbt"
              style={{ width: "80px" }}
            >
              Contact
            </h1>
            <hr />
            <p className="mt-4 formname text-sm">
              Get in touch for more information about our products or to get a
              quote.
            </p>
          </div>
          <div className="mb-10">
            <h1
              className="uppercase font-bold w-36 borderbt"
              style={{ width: "135px" }}
            >
              Opening Hours
            </h1>
            <hr />
            <p className="mt-3 formname leading-7 text-sm">
              Monday- Friday <br /> 10:00AM- 5:00PM
            </p>
          </div>
          <div className="mb-10">
            <h1
              className="uppercase font-bold w-16 borderbt"
              style={{ width: "55px" }}
            >
              Phone
            </h1>
            <hr />
            <p className="mt-4 formname text-sm ">020 3818 5750</p>
          </div>
          <div className="mb-10">
            <h1
              className="uppercase font-bold w-12 borderbt"
              style={{ width: "50px" }}
            >
              Email
            </h1>
            <hr />
            <p className="mt-4 formname text-sm ">zTzPd@example.com</p>
          </div>
          <div className="mb-10">
            <h1
              className="uppercase font-bold borderbt"
              style={{ width: "75px" }}
            >
              Address
            </h1>
            <hr />
            <p className="mt-4 formname  text-sm">
              1st Floor, Portland House <br /> 164 New Cavendish Street <br />{" "}
              London W1W 6YT
            </p>
          </div>
        </div>
        <div className="col-span-2 mr-20 ml-6 leading-10 uppercase">
          <form action="">
            <label htmlFor=" " className="text-sm formname">
              Name (Required)
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-xs inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-sm formname">
              Email (required)
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Email"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-xs inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-sm formname">
              Phone
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Phone"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-xs inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-sm formname">
              Message
            </label>
            <br />

            <textarea
              name=""
              id=""
              placeholder="Your Message"
              className="rounded-md w-full h-48 border-x border-y pl-4 box-border text-xs inputnamecl pt-2 max-h-fit uppercase "
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
      {/* <Map /> */}
    </>
  );
};

export default Contact;
