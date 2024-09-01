import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-96 py-20 mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	 ">
              Let's Get <br />
              Connected
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline border-1 ">
          <hr />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full h-auto mt-12  mb-12">
        <div className="ml-20 mr-6 mt-5 d-flex">
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
            <p className="mt-3 formname text-sm leading-7">
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
            <label htmlFor=" " className="text-xs formname">
              Name (Required)
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Name"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-sm inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-xs formname">
              Email (required)
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Email"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-sm inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-xs formname">
              Phone
            </label>
            <br />
            <input
              type="text"
              placeholder="Your Phone"
              className=" rounded-md w-full h-10 border-x border-y pl-4  box-border text-sm inputnamecl mb-2 uppercase"
            />
            <label htmlFor=" " className="text-xs formname">
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
              className="text-white bg-blue-700 hrline font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase btnsend"
            >
              send
            </button>
          </form>
        </div>
      </div>

      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851966824!2d-0.2664051595240117!3d51.52852620095036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1725026058934!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      
    </>
  );
};

export default Contact;
