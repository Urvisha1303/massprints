import React from "react";
import "./Design.css";

import ornella from "../../assets/Ornella-Iannuzzi.jpg";
// import Slider from "../Slider";
import GetInTouch from "../getintouch";
import Contactdetails from "../Contactdetails";
import Map from "../Map";
import Slider from "../Slider";

const Design = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	 ">
              Design Studio
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline ">
          <hr />
        </div>
      </div>

      <section className="text-gray-600 body-font my-16">
        <div className="container pt-16 pb-12  mx-20 ">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <hr className="w-24 rounded mt-6 mb-6 border-black" />
              <div className="h-full text-left text-sm pr-16">
                <p className="leading-relaxed">
                  Our design team develops a wide variety of projects including
                  business cards and stationery, logo design, leaflets,
                  brochures, digital publications and invites, as well as visual
                  identity design for start-up companies or those looking to
                  rebrand.
                </p>
                <br />
                <br />
                <p>
                  We tailor our design services to our clients’ schedules and
                  budget and can advise about the print finishing options that
                  will add an extra special touch to the products.
                </p>
                <br />
                <br />
                <p>
                  Using our in-house print capabilities, we can quickly produce
                  printed proofs for you to sign off, making the design process
                  efficient and maintaining high-quality results both in digital
                  design and print design.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <hr className="border-0 mt-6 mb-6 border-black" />
              <div className="h-full text-left text-sm pr-12">
                <p className="leading-relaxed">
                  To find out more, arrange a meeting or get a quote contact our
                  designers on <span className="lineclr"> 020 3818 5750 </span>
                  or email to <br />
                  <span className="lineclr">tomas@thelondonprinters.co.uk</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="w-full flex px-5 py-24 ">
          <div className=" text-center w-1/4">
            <div className="">
              <div className=" mr-6 mt-2 d-flex">
                <div className="mb-10 mr-6 mx-16">
                  <h1
                    className="font-bold borderbt leading-loose pb-4 text-left text-xl text-black"
                    style={{ width: "125px" }}
                  >
                    Logo Design
                  </h1>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-3/4 mr-16">
            <div className="mb-3 w-full">
              <hr />
            </div>
            <div>
              <Slider
                sliderImage1={ornella}
                sliderImage2={
                  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                }
                sliderImage3={
                  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                }
              />
            </div>
           
            <div className="mt-3 w-full">
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="w-full flex px-5 py-24 ">
          <div className=" w-3/4 ml-16">
            <div className="mb-3 w-full">
              <hr />
            </div>
            <div>
              <Slider
                sliderImage1={ornella}
                sliderImage2={
                  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                }
                sliderImage3={
                  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                }
              />
            </div>
            <div className="mt-3 ">
              <hr />
            </div>
          </div>
          <div className=" text-center  w-1/4">
            <div className="">
              <div className=" mr-6 mt-2 d-flex">
                <div className="mb-10 mr-6 mx-16 text-right">
                  <h1 className="font-bold borderbt inline-block leading-loose pb-4 text-right text-xl text-black">
                    Print Design
                  </h1>
                  <hr />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch/>
      <Contactdetails/>
      <Map/>
    </>
  );
};

export default Design;
