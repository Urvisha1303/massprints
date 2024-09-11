import React from "react";
import "./DigitalPublication.css";
import Slider from "../Slider";
// import ornella from "../../assets/Ornella-Iannuzzi.jpg";
import GetInTouch from "../GetInTouch";
import Contactdetails from "../Contactdetails";
// import Map from "../Map";

const DigitalPublication = () => {
  return (
    <>
      <div className="w-full bg-color bgimage3 ">
        <div className="h-68 py-20 mx-10 sm:mx-20 content-center	">
          <div className=" mt-28">
            <h1 className="text-right text-6xl mb-8 uppercase font-bold content-center text-white">
              Digital <br />
              Publications
            </h1>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font bg-clr-design ">
        <div className="flex flex-wrap px-5 pt-16 pb-12 mx-6 md:mx-16 my-20 items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 mb-10 pb-10">
            <div className="hrline border-0 ">
              <hr />
            </div>
            <div className="mt-8 font-bold text-2xl clr-design">
              <p>
                Today’s world is challenging businesses to rethink the ways in
                which they communicate and collaborate. Digital publications are
                a great tool that can future-proof marketing materials and
                ensure that books, magazines, brochures and catalogues look
                their best, regardless of whether they are viewed in print or
                online.
              </p>
              <br />
              <br />
              <p>
                Additionally, digital publications offer readers an enhanced
                experience - with the option of including video and sound in a
                brochure, businesses can say so much more about their products
                and brand. These publications are cost-effective too, since they
                quickly reach a diverse and global audience.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12"></div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-8">
        <div className="flex flex-wrap px-2 md:px-5 py-2 md:py-6 mx-4 md:mx-16 items-center">
          <h1 className="uppercase font-bold text-3xl text-clr pb-6 borderbt border-0inline-block ">
            Digital publication preview
          </h1>
          <hr />
          <div className="lineclr mt-4 text-xl md:text-sm">
            <a href="">Grove Square Galleries / Sierra Catalogue</a>
            <br />
            <a href="">Hanga Ten / The Master and The Apprentice</a>
          </div>
        </div>
      </section>

      <div className=" mx-6 md:mx-20 mb-20">
        <Slider
          sliderImage1={"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"}
          sliderImage2={
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          }
          sliderImage3={
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          }
        />
      </div>
      <GetInTouch
        name={"get in touch"}
        alignClass={"text-right"}
        position={"left-0"}
      />
      <Contactdetails />
      {/* <Map/> */}
    </>
  );
};

export default DigitalPublication;
