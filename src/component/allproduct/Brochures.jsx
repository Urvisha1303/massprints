import React from "react";
import Card from "../Card";
import AccordionComponent from "../AccordionComponent";
import Map from "../Map";

const Brochures = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	 ">
              Folded <br />
              BrochureS
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline ">
          <hr />
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" py-24 mx-16">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-96 object-cover object-center rounded"
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_brochures.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 self-center text-sm leading-6 text-black	">
              <p>
                A simple yet engaging product - our folded brochures come is a
                variety of sizes and finishes, from DL to A4, from 100gsm paper
                to 300gsm card, laminated either matt or gloss. There is also a
                range of folding options to match the layout of your brochure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font py-8 mx-16">
        <div className="flex">
          <Card
            cardname="Paper stock"
            cardDetails={
              <>
                <p>
                  160gsm silk <br />
                  160gsm silk <br />
                  170gsm silk <br />
                  170gsm matt <br />
                  300gsm matt <br />
                  300gsm Conqueror
                </p>
              </>
            }
          />
          <Card cardname="Printing Processes" cardDetails="Digital and Litho" />
          <Card
            cardname="Finishing"
            cardDetails="Matt or gloss Lamination Folding"
          />
          <Card
            cardname="ARtwork"
            cardDetails={
              <>
                <b>Standard artwork size:</b>
                <p>
                  Folded to DL (210 x 99 mm) <br />
                  Folded to A5 (210 x 148 mm) <br />
                  Folded to A4 (210 x 297 mm)
                </p>
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

      <Map/>
    </>
  );
};

export default Brochures;
