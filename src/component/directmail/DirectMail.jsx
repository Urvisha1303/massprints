import React from "react";
import "./DirectMail.css";
import MailDecription from "../MailDecription";
import BenifitMail from "../BenifitMail";
import GetInTouch from "../GetInTouch";
import Contactdetails from "../Contactdetails";
import Map from "../Map";

const DirectMail = () => {
  return (
    <>
      <div className="w-full bg-color  bgimage1 ">
        <div className="h-96 py-20 mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center text-white">
              Direct Mail services
            </h1>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 pt-16 pb-12 mx-16 items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 mb-10 pb-10">
            <div className="hrline border-0 ">
              <hr />
            </div>
            <div className="mt-8 text-black font-bold text-lg">
              <p>
                Our direct mail service is an efficient solution for all your
                print distribution needs. After printing your products, we will
                package and label them appropriately, and send them out to
                recipients as per your instructions. All parcels will have a
                tracking number so you can check the status of the delivery,
                giving you peace of mind both in relation to the printing and
                posting of your products.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12"></div>
        </div>
      </section>
      <div className="flex mx-16">
      <MailDecription
        headername={"What is Direct Mail?"}
        details={
          "Direct mail is a type of marketing campaign which involves sending hard copy promotional materials directly to customers' homes or offices. The marketing materials can range from simple A5 leaflets to comprehensive product catalogues. In many cases, direct mail continues to be a more effective way of reaching customers than digital or online marketing campaigns."
        }
      />
      <MailDecription
        headername={"Direct Mail Costs"}
        details={
          "Direct mail can be seen as an expensive form of marketing, since it involves both printing and postage costs, however direct mail has high response rates and drives online activity, as a result offering a higher return on investment than strictly digital campaigns. Also, we can advise you on cost-effective printing solutions that can save you money while still producing an eye-catching product, and discounts for bulk postage are available."
        }
      />
      <MailDecription
        headername={"Types of Direct Mail"}
        details={
          "Direct mail can involve a wide variety of promotional materials - letters, leaflets, magazines, postcards, brochures, etc. Choosing the right product will depend on your goal, target audience, and budget. Some formats will cost more than others, so it's important to consider the format while planning and designing your campaign."
        }
      />
      </div>

      <section className="text-gray-600 body-font py-8 mx-16">
        <div className="p-4 mb-4 flex  ">
          <div className=" flexflex-wrap px-5 py-6 text-center w-full">
            <h1 className="uppercase font-bold text-2xl text-black pb-6 borderbt inline-block ">
              ADVANTAGES OF DIRECT MAIL?
            </h1>
            <hr />
          </div>
        </div>
        <div className="flex">
          <BenifitMail
            mailIcon={"fa-solid fa-pencil fa-flip-horizontal"}
            mailName={"It's personal"}
            mailDetails={
              "One of the advantages of direct mail is that each item can be personalised. You can use insights from your client database to add a message or product suggestion that is specifically tailored to a client's buying habits or interests. "
            }
          />

          <BenifitMail
            mailIcon={"fa-solid fa-expand"}
            mailName={"It comes in a variety of formats"}
            mailDetails={
              "Direct mail allows you to produce eye-catching, unique pieces that will draw the attention of your customers and make your company memorable and special for them. Letters, catalogues, leaflets, die cuts, we would say 'the sky is the limit' - but of course your deadline and budget also plays an important role, so before designing a piece of direct mail it's worth giving us a call to check for cost-effective ways of producing your direct mail items."
            }
          />

          <BenifitMail
            mailIcon={"fa-solid fa-book"}
            mailName={"It's tangible"}
            mailDetails={
              "Despite the drive towards digital technologies, people still enjoy receiving hard-copy materials and tend to take a greater interest in them than in online materials. As a result, direct mail can increase your sales and encourage online activity, with clients browsing your website for more information about a product they've seen in your direct mail package."
            }
          />

          <BenifitMail
            mailIcon={"fa-solid fa-arrow-trend-up"}
            mailName={"IT'S EASILY MEASURED"}
            mailDetails={
              "Since each piece of direct mail can contain a personalised code that customers can redeem upon purchase, or QR code that can be tracked, it's easy to measure the effectiveness of a direct mail campaign. This can help you tailor both your direct mail and digital content to your customers, and make sure your promotions match their interests and buying habits."
            }
          />
        </div>
      </section>

      <GetInTouch name={"get in touch"} alignClass={"text-right"} position={"left-0"}/>
      <Contactdetails/>
      <Map/>
    </>
  );
};

export default DirectMail;
