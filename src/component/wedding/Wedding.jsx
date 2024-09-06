import React from "react";
import "./Wedding.css";
import Card from "../Card";
import AccordionComponent from "../AccordionComponent";
import WeddingGridImage from "../WeddingGridImage";
import GetInTouch from "../GetInTouch";
import Contactdetails from "../Contactdetails";
import Map from "../Map";

const Wedding = () => {
  return (
    <>
      <div className="w-full bg-color  bgimage ">
        <div className="h-96 py-20 mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center text-black">
              Wedding <br />
              stationery
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
              <h1 className="text-6xl uppercase leading-snug">
                It's your special day
              </h1>
              <p>
                Cake tasting, dress fitting, florist consultations...planning a
                wedding is equally exciting and exhausting. After all, you want
                your special day to be absolutely perfect.
                <br />
                <br />
                We're here to help you reach that perfection by offering
                beautifully printed wedding stationary - from invitations, menus
                and table cards to thank you cards for all the guests.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12"></div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-8 mx-16 mt-20 mb-10">
        <div className="grid grid-cols-4">
          <Card
            width={"w-1/4"}
            cardname="Paper stock"
            cardDetails={
              <>
                350gsm / 700gsm Conqueror Smooth <br /> or Textured; GF Smith
                Colorplan
              </>
            }
          />
          <Card
            width={"w-1/4"}
            cardname="Printing Processes"
            cardDetails="Digital Colour"
          />
          <Card
            width={"w-1/4"}
            cardname="Finishing"
            cardDetails="Foil Blocking available on request"
          />
          <Card
            width={"w-1/4"}
            cardname="Finishing"
            cardDetails={<>
            Standard artwork size: <br />
            A5 (portrait and landscape)
            </>}
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

      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-20">
          <div className="flex flex-wrap -m-4">
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/4-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/16-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0040-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0045-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0048-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/20-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/19-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0086-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0069-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0993-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/21-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0105-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/18-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/25-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/28-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0113-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0973-683x683.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/11-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/15-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/7-768x768.jpg"
              }
            />
            <WeddingGridImage
              gridImage={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/DSC_0989-683x683.jpg"
              }
            />
          </div>
        </div>
      </section>

      <GetInTouch
        name={"get in touch"}
        alignClass={"text-right"}
        position={"left-0"}
      />
      <Contactdetails />
      <Map />
    </>
  );
};

export default Wedding;
