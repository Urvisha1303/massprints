import React from "react";
import "./StartUp.css";
import GetInTouch from "../GetInTouch";
import Contactdetails from "../Contactdetails";
import Map from "../Map";
import { Link } from "react-router-dom";

const StartUp = () => {
  return (
    <>
      <div className="w-full bg-color  bgimage2 ">
        <div className="h-96 py-20 mx-20 content-center	">
          <div className=" mt-28">
            <h1 className="text-left text-6xl mb-8 uppercase font-bold content-center text-white">
              Start-up package
            </h1>
            <h6 className="text-left text-xl uppercase font-bold content-center text-white">
              FOR NEW BUSINESSES
            </h6>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className=" flex flex-wrap px-5 pt-16 pb-12 mx-20 mb-10 ">
          <div className="md:w-1/2 md:py-8 mb-10 pb-10">
            <div className="hrline border-0 ">
              <hr />
            </div>
            <div className="mt-8 text-black font-bold text-lg">
              <h1 className="uppercase text-6xl font-bold leading-tight mb-6">
                Get Ready <br /> to shine
              </h1>
              <p>
                Starting and growing a business is a very exciting and rewarding
                experience. But staying on top of your ‘to do’ list can
                sometimes be a challenge.
              </p>
              <br />
              <br />
              <p>
                Our start-up business package covers all the basics of logo and
                visual identity design, business card and stationery printing,
                and website design, giving you peace of mind, and leaving you
                with more time to focus on your own services and products.
              </p>
            </div>
          </div>
          <div>
            <div className="  h-96 "></div>
            <div className="bgstartupimg  ml-24 "></div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className=" flex flex-wrap pt-10  mx-20 mb-10 ">
          <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 pr-4 lg:text-left text-center">
            <div className="hrline border-0 w-16 ">
              <hr />
            </div>
            <div className=" text-black mr-12 fontsize1 font-medium text-right h-80">
              <h1>1</h1>
            </div>
            <div className="">
              <h1 className="uppercase text-4xl font-bold leading-tight mb-6 text-black">
                Brand design <br />
                and consultancy
              </h1>
              <p className=" text-lg  text-sm leading-relaxed text-black">
                Developing a brand identity involves research, planning, concept
                sketching, and design. Our team of designers is here to help you
                through this process and create a brand that will reach its
                target audience and present your products and services to their
                best. This stage of the process will set the foundations of your
                brand’s ‘look and feel’ and result in a recognisable and
                memorable visual identity.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 relative lg:mb-0 rounded-sm overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://thelondonprinters.co.uk/wp-content/uploads/2019/01/TLPstartup01-1.jpg"
            />
            <div className="absolute right-0 bottom-36 text-black text-right ">
              <hr className="w-32 text-right border-black botrder-1 inline-block" />
              <h1 className="uppercase font-bold text-xl pt-6 pb-4"> Design</h1>
              <p className="text-sm mt-4 fontlightclr leading-relaxed">
                Free Consultancy <br />
                Logo design <br /> Basic branding <br />
                Stationery design (business cards, letterhead, flyers){" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className="flex flex-wrap pt-10 mx-20 mb-10 ">
          <div className="lg:w-1/2 w-full mb-10 relative lg:mb-0 rounded-sm overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://thelondonprinters.co.uk/wp-content/uploads/2019/01/TLPstartup02.jpg"
            />
            <div className="absolute right-0 bottom-40 text-black text-start w-full">
              <hr className="w-32 text-right border-black botrder-1" />
              <h1 className="uppercase font-bold text-xl pt-10 pb-2"> Print</h1>
              <p className="text-sm mt-4 fontlightclr leading-relaxed">
                500 x business cards <br />
                500 x letterheads <br /> 250 x A5 size flyers
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 pr-4 ">
            <div className="hrline border-0 w-16 self-end">
              <hr />
            </div>
            <div className="text-black ml-12 fontsize1 font-medium text-left h-80">
              <h1>2</h1>
            </div>
            <div className="text-right">
              <h1 className="uppercase text-4xl font-bold leading-tight mb-6 text-black">
                Print
              </h1>
              <p className=" text-sm  text-sm leading-relaxed text-black">
                Developing a brand identity involves research, planning, concept
                sketching, and design. Our team of designers is here to help you
                through this process and create a brand that will reach its
                target audience and present your products and services to their
                best. This stage of the process will set the foundations of your
                brand’s ‘look and feel’ and result in a recognisable and
                memorable visual identity high-end GF Smith papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className=" flex flex-wrap pt-10  mx-20 mb-10 ">
          <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 pr-4 lg:text-left text-center">
            <div className="hrline border-0 w-16 ">
              <hr />
            </div>
            <div className=" text-black mr-12 fontsize1 font-medium text-right h-80">
              <h1>3</h1>
            </div>
            <div className="">
              <h1 className="uppercase text-4xl font-bold leading-tight mb-6 text-black">
                website
              </h1>
              <p className=" text-lg  text-sm leading-relaxed text-black">
                A well designed, professional website goes hand-in-hand with
                printed marketing materials to promote your business and
                products. Our basic start-up package therefore includes a 5-page
                website with a built-in Wordpress content management system as
                standard, allowing you to easily manage and update the website
                we prepare. We’re also happy to discuss additional requirements
                such as e-commerce, custom photography, emial marketing
                campaigns, etc. to make sure your website and online presence
                really works for you and your brand.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 relative lg:mb-0 rounded-sm overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://thelondonprinters.co.uk/wp-content/uploads/2019/01/TLPstartup03.jpg"
            />
            <div className="absolute right-0 bottom-20 text-black text-right ">
              <hr className="w-32 text-right border-black botrder-1 inline-block" />
              <h1 className="uppercase font-bold text-xl pt-6 pb-4"> Design</h1>
              <p className="text-sm mt-4 fontlightclr leading-relaxed">
                Wordpress template <br />
                5-8 page website based <br /> Responsive design <br />
                Website functionality based on template <br /> Wordpress CMS +
                Wordpress template <br /> Google Analytics integration <br />
                SEO ready / Help with email setup, webmail
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch
        name={"Case studies"}
        alignClass={"text-right"}
        position={"left-0"}
      />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-start">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <Link to="/musicart">
                  <img
                    alt="content"
                    className="h-full w-full"
                    src="https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Musicart-business-cards.jpg"
                  />
                </Link>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Music Art London
              </h2>
              <p className="text-sm">Conceptual Concerts</p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-96 overflow-hidden">
                <Link to="/rachelclare">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-flyers.jpg"
                />
                </Link>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Rachel Clare
              </h2>
              <p className="text-sm">Nutrition</p>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch
        name={"get in touch"}
        alignClass={"text-left"}
        position={"right-0"}
      />
      <Contactdetails />
      <Map />
    </>
  );
};

export default StartUp;
