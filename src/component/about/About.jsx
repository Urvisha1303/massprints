import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-72 sm:mx-16 py-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	px-10 sm:px-16 fontclr ">
              Who <br />
              We are
            </h1>
          </div>
        </div>
        <div className="mx-4 sm:mx-20 md:mx-16 pd-10 hrline border-0">
          <hr />
        </div>
      </div>
      <div className=" w-full sm:w-5/12 h-auto mt-20 sm:mt-40  mb-12  mb-40 ">
        <div className=" ml-10 sm:ml-20 mr-6 sm:mt-5 d-flex text-sm formname tracking-wider leading-7">
          The London Printers offers a diverse range of services that go beyond
          the printed page. <br /><br />
          Our print production team is experienced in delivering a wide variety
          of products such as business cards, leaflets, and brochures, high-end
          embossed, die cut or foil-blocked invitations, branded notepads, swing
          tags or labels, and much more. <br /> <br />Our design team undertakes graphic
          design projects for both printed and digital media, including website
          design, digital / online brochure design, and branding.  <br /><br /> Drop us a line
          or give us a call, we would love to know how we can help you with your
          next project.
        </div>
      </div>
    </>
  );
};

export default About;
