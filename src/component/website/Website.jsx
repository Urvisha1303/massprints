import "./Website.css";
import towersalon from "../../assets/TowerSalon.jpg";
import missionstree from "../../assets/Mission-Stree.jpg";
import dorset from "../../assets/Dorset-06.jpg";
import mjgallery from "../../assets/Mjgallery001-768x432.jpg";
import pursuit from "../../assets/Another-pursuit1.jpg";
import delta from "../../assets/Delta365-home.jpg";
import playground from "../../assets/the-playground-Theatre-home.jpg";
import kamera from "../../assets/KameraObscura-Home.jpg";
import gbc from "../../assets/GBC-Home.jpg";
import musicart from "../../assets/MusicArt.jpg";
import vin from "../../assets/VinSaveur.jpg";
import americanjustice from "../../assets/American-justice.jpg";
import barreto from "../../assets/Barreto-.jpg";
import mishcon from "../../assets/Mishcon-Architects.jpg";
import lisa from "../../assets/Home.jpg";
import lyndons from "../../assets/Lyndons-home.jpg";
import thorburn from "../../assets/Thorburn-home.jpg";
import mike from "../../assets/mj-home2.jpg";
import annie from "../../assets/Annie-Yim-home1.jpg";
import johnfrase from "../../assets/johnFraserwebsite.jpg";
import DesignCard from "./design-card";
import WebsiteFeatureCard from "./website-feature-card";
const Website = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	 ">
              Web Design
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline border-1 ">
          <hr />
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-40 pb-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xl leading-loose mb-1 tracking-widest">
              OUR WEBSITES
            </h2>
            <h1 className="sm:text-3xl text-2xl tracking-widest font-medium title-font text-gray-900 fontclrh2">
              INCLUDE THE FOLLOWING
            </h1>
          </div>
          <div className="flex flex-wrap mx-12">
            <WebsiteFeatureCard
              cardIcon={"fa-solid fa-pencil fa-flip-horizontal"}
              cardName={"Bespoke Design"}
              cardDetails={
                "Our websites are designed to suit a variety of budgets. We  can develop your website based on a template and customise it to your brand or we can create a bespoke design especially for your business. We communicate with you during all stages of design to make sure you get the product you are looking for."
              }
            />
            <WebsiteFeatureCard
              cardIcon={"fa-solid fa-mobile"}
              cardName={"Mobile Optimised"}
              cardDetails={
                "With an increasing number of people viewing websites on their phones and tablets, it’s important to make sure your website looks and works perfectly on all devices. We testand optimise our websites for all screen sizes and browsersto make sure your clients get the best web experience every time."
              }
            />
            <WebsiteFeatureCard
              cardIcon={"fa-solid fa-bullhorn"}
              cardName={"SEO Optimised"}
              cardDetails={
                "We can help you reach a wider audience through SEOoptimisation. With the right keywords, optimal userexperience and a strategy for post-launch websitemanagement, you can increase your website’s visibility and boost sales."
              }
            />
            <WebsiteFeatureCard
              cardIcon={"fa-solid fa-right-to-bracket"}
              cardName={" cms"}
              cardDetails={
                "Once a website is designed and launched, it’s important to regularly update it with the latest products and information. That’s where CMS comes in. All our sitesinclude a content management system that allows you to easily make the updates you need. We also offer CMS training to your team if several people will be responsible for website maintenance.."
              }
            />
            <WebsiteFeatureCard
              cardIcon={"fa-solid fa-basket-shopping"}
              cardName={"e-commerce"}
              cardDetails={
                "More and more people are ordering products online, so e-commerce is becoming a must for many businesses. We offer user-friendly and secure e-commerce sites as part of our website design package to make sure your customers can order your products whenever they need them."
              }
            />
            <WebsiteFeatureCard
              cardIcon={"fa-solid fa-lock"}
              cardName={"Security"}
              cardDetails={
                "It is extremely important to us to make sure that your website and the data stored on it is safe from hackers and malware"
              }
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font mx-16">
        <div className="container px-5 mb-28 mx-auto">
          <div className="flex flex-wrap -m-4">
            <DesignCard cardImagePath={towersalon} cardText={"Tower Salon"} />
            <DesignCard
              cardImagePath={missionstree}
              cardText={"Mission Street"}
            />
            <DesignCard
              cardImagePath={dorset}
              cardText={"Dorset Street Practice"}
            />
            <DesignCard
              cardImagePath={mjgallery}
              cardText={"Mishcon Jackson Architects"}
            />
            <DesignCard cardImagePath={pursuit} cardText={"Another Pursuit"} />
            <DesignCard cardImagePath={delta} cardText={"Delta 365"} />
            <DesignCard
              cardImagePath={playground}
              cardText={"The Playground Theatre"}
            />
            <DesignCard cardImagePath={kamera} cardText={"Kamera Obscura"} />
            <DesignCard
              cardImagePath={gbc}
              cardText={"Gunnersbury Baptist Church"}
            />
            <DesignCard cardImagePath={musicart} cardText={"MusicArt London"} />
            <DesignCard cardImagePath={vin} cardText={"Vin-Saveur"} />
            <DesignCard
              cardImagePath={americanjustice}
              cardText={"American Justice"}
            />
            <DesignCard
              cardImagePath={barreto}
              cardText={"Barreto Photography"}
            />
            <DesignCard
              cardImagePath={mishcon}
              cardText={"Mishcon Architects"}
            />
            <DesignCard cardImagePath={lisa} cardText={"Lisa Forrell"} />
            <DesignCard
              cardImagePath={lyndons}
              cardText={"Lyndons Arts Trust"}
            />
            <DesignCard
              cardImagePath={thorburn}
              cardText={"Thorburn Landscapes"}
            />
            <DesignCard
              cardImagePath={mike}
              cardText={"Mike Joseph Jewellery"}
            />
            <DesignCard cardImagePath={annie} cardText={"Annie Yim"} />
            <DesignCard cardImagePath={johnfrase} cardText={"John Fraser"} />
          </div>
        </div>
      </section>

      <div className="w-full h-auto bg-color mb-20">
        <div className="h-72 py-20 mx-20 content-center	relative">
          <div>
            <h1 className="text-right text-6xl pt-16 uppercase font-bold content-center	 ">
              GET IN TOUCH
            </h1>
          </div>
          <hr className="w-72 absolute top-24 hrline" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full h-auto mt-12  mb-36">
        <div className="ml-20 mr-6 mt-5 d-flex">
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

export default Website;
