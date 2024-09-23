import React from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  return (
    <div className=" mx-6 md:mx-16 my-20">
      <h1 className="uppercase text-xl font-bold px-6 py-2 w-full h-auto bg-clr-design	text-white mb-4">
        Make an Enquiry
      </h1>
      <div className="grid md:grid-cols-3 gap-4 w-full h-auto mt-12 mb-36">
        <div className="md:col-span-2 mr-6 md:mr-20 md:ml-6 leading-10 uppercase">
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
              className="border-0 hrline font-medium text-sm px-5 py-2.5 me-2 mt-8 mb-2 btnsend rounded-lg w-36 h-10"
            >
              Send Order
            </button>
          </form>
        </div>
        <div className="md:col-span-1 mr-6 mt-5 d-flex">
          <div className="mb-14">
            <h1
              className="uppercase font-bold borderbt pb-4 text-xl"
              style={{ width: "210px" }}
            >
              NEED HELP? CALL US!
            </h1>
            <hr />
            <p className="mt-4 text-sm">
              Call on{" "}
              <span className="formname emailclr font-bold">
                020 3818 5750{" "}
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
              <button
                type="button"
                className="border-0 font-medium text-sm px-5 py-2.5 me-2 mt-8 mb-2 uppercase btnsend rounded-lg w-36 h-10"
              >
                Contact <i className="fa-regular fa-envelope pl-4"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
