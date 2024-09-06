import React from "react";
import HeaderSection from "../HeaderSection";
import DetailsSection from "../DetailsSection";
import Card from "../Card";
import AccordionComponent from "../AccordionComponent";
import HeadingContent from "../HeadingContent";
import EnquiryForm from "./EnquiryForm";
import Map from "../Map";

const RollerBanners = () => {
  return (
    <>
      <HeaderSection name={"Roller Banners"} />
      <DetailsSection
        image={
          "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_banners.jpg"
        }
        description={
          <>
            Roller banners enhance your display and help promote your products
            and events. Printed on specialist material, our banners come in
            budget, standard and luxury options to suit every schedule and
            budget.
          </>
        }
      />

      <section className="text-gray-600 body-font py-8 mx-16">
        <div className="grid grid-cols-3">
          <Card
            cardname="Blurb Roller Banner Stand and Poster"
            cardDetails={
              <>
                <p>
                  Our lowest cost stand is perfect for occasional use and
                  displaying posters at a fixed height of 2 metres. Unzip the
                  carry case, flip out the feet, snap the 3 part pole together
                  and unroll the poster. You'll be surprised just how huge these
                  Blurb Banner Stands look.
                </p>
              </>
            }
          />
          <Card
            cardname="Product specifications"
            cardDetails={
              <>
                <p>
                  Poster: 800 x 2200mm <br />
                  Visible graphic size: 800 x 2000mm <br />
                  410gsm grey back film <br />
                  Prevents light passing through <br />
                  Suitable for indoor use only <br />
                  Full process colour one side Printed with latex inks - water
                  and UV resistant <br />
                </p>
                <p>
                  {" "}
                  <br />
                  Silver roller banner stand <br />
                  Twin twist out feet <br />
                  Bungee pole <br />
                  Assembled stand size: 815mm(w)x2090mm(h)x285mm(d) <br />
                  Carry bag included
                </p>
              </>
            }
          />
          <Card
            cardname="Turnaround time"
            cardDetails={
              <>
                <p>4 working days</p>
              </>
            }
          />
          <Card
            cardname="Formal Roller Banner Stand and Poster"
            cardDetails={
              <>
                <p>
                  Get your giant sales message in front of your customer's eyes
                  whilst having the flexibility and convenience of moving it
                  around your premises. The Formal stand frees up valuable wall
                  space - ideal for gyms to promote new memberships, pubs and
                  restaurants to encourage Christmas bookings and great for any
                  communal areas for maximum impact.
                </p>
              </>
            }
          />

          <Card
            cardname="Product Specifications"
            cardDetails={
              <>
                <p>
                  Poster: 850 x 2200mm <br />
                  Variable visible graphic height: 1560 - 2040mm <br />
                  410gsm grey back film <br />
                  Prevents light passing through <br />
                  Suitable for indoor use only <br />
                  Full process colour one side <br />
                  Printed with latex inks - water and UV resistant
                </p>
                <p>
                  Silver roller banner stand <br />
                  Single rear twist out foot <br />
                  Hybrid pole - half telescopic/half bungee <br />
                  Variable assembled stand height: 1650 - 2180mm <br />
                  Pole height maximum setting 2150mm <br />
                  Padded carry bag included
                </p>
              </>
            }
          />
          <Card
            cardname="Turnaround time"
            cardDetails={
              <>
                <p>4 working days</p>
              </>
            }
          />
        </div>
      </section>

      <div className="mx-16 mb-8">
        <h1 className="pb-4 text-xl font-bold borderbtblack inline-block fontblue">
          PRESS-READY SPECIFICATIONS
        </h1>
        <hr />
      </div>

      <div className="mx-16 mb-8 text-xl">
        <AccordionComponent
          accordionHeader={"PRESS-READY PDF"}
          accordiondetails={
            <>
              <li>
                Manually select <b>Print</b> Print and choose the{" "}
                <b>Press Quality</b> setting{" "}
              </li>{" "}
              <li>
                Add crop marks (outer corner marks, not full colour bars) outset
                by 6 points, so they do not touch the cut size of the document
              </li>{" "}
              <li>Include bleed</li>{" "}
            </>
          }
        />
        <AccordionComponent
          accordionHeader={"APPLICATIONS AND FONTS"}
          accordiondetails={
            <>
              <li>Optimise your PDF for print (300 dpi images)</li>{" "}
              <li>Embed your fonts or outline</li>{" "}
              <li>Any ultra light, light or Thin fonts change to outline</li>{" "}
              <li>
                Choose <b>Press Quality</b> when creating your PDF
              </li>
            </>
          }
        />
        <AccordionComponent
          accordionHeader={"COLOUR"}
          accordiondetails={
            <>
              <li>Artwork should be CMYK or greyscale</li>
              <li>
                Please be aware that screen colours (RGB) may appear duller or
                lacking in contrast when printed
              </li>
            </>
          }
        />
        <AccordionComponent
          accordionHeader={"SCANS AND IMAGES"}
          accordiondetails={
            <>
              <li>Colour images should be CMYK colour mode</li>
              <li>Scanned or bitmapped images should be 300 dpi</li>
            </>
          }
        />

        <AccordionComponent
          accordionHeader={"ADDITIONAL INFORMATION"}
          accordiondetails={
            <>
              <li>
                We accept files saved using one of the following software: Adobe
                InDesign, Adobe Photoshop, Adobe Illustrator, Microsoft Word,
                Excel, PowerPoint.
              </li>
              <li>
                For the Adobe packages please save all files with the outlined
                fonts.
              </li>
              <li>
                Files created in one of the Microsoft packages usually get
                better results if they’re saved as pdfs.
              </li>
              <li>
                To help as many people as possible, The London Printers accepts
                a range of different formats. These are: JPEG, PNG, PDF.
              </li>
              <li>
                For the photography artwork we would recommend high resolution
                JPEGs (preferably un-compressed).
              </li>
              <li>
                For Graphics or Text files please save it as print-ready, vector
                based PDF.
              </li>
              <li>
                For a mix of graphics and photography artwork the best solution
                would be print-ready PDFs.
              </li>
            </>
          }
        />
        <AccordionComponent
          accordionHeader={"BLEED REQUIREMENT"}
          accordiondetails={
            <>
              <li>The usual bleed requirement is 2mm all round</li>
            </>
          }
        />
      </div>
      <HeadingContent
        headername={
          "for Roller Banners' pricing please give us a call on 020 3818 5750"
        }
        textTranform={"uppercase"}
      />
      <EnquiryForm />
      <Map />
    </>
  );
};

export default RollerBanners;
