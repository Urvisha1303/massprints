import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-72 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	fontclr ">
              Who <br />
              We are
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline border-0">
          <hr />
        </div>
      </div>
      <div className="w-5/12 h-auto mt-40  mb-12  mb-40 ">
        <div className="ml-20 mr-6 mt-5 d-flex text-sm formname tracking-wider leading-7">
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
