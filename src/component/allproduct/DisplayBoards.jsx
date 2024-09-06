import React from "react";
import HeaderSection from "../HeaderSection";
import DetailsSection from "../DetailsSection";
import Card from "../Card";
import AccordionComponent from "../AccordionComponent";
import HeadingContent from "../HeadingContent";
import EnquiryForm from "./EnquiryForm";
import Map from "../Map";

const DisplayBoards = () => {
  return (
    <>
      <HeaderSection name="Display Boards" />

      <DetailsSection
        image={
          "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Greeting-Cards-2.jpg"
        }
        description={
          <>
            Greeting cards are an excellent way to delight and surprise loved
            ones, and show them you care even when miles apart. With our
            high-quality print and bespoke finishes you will be able to add an
            extra-special touch to your best wishes and produce your own unique
            cards for every occasion.{" "}
          </>
        }
      />

<section className="text-gray-600 body-font py-8 mx-16">
      <div className="grid grid-cols-4">
          <Card
            cardname="Paper stock"
            cardDetails={
              <>
                <p>
                  400 gsm silk art <br />
                  300 gsm wove uncoated.
                </p>
              </>
            }
          />
          <Card
            cardname="Printing Processes"
            cardDetails="Litho Printing"
           
          />
          <Card
            cardname="Finishing"
            cardDetails="Matt or gloss Lamination"
           
          />
          <Card
            cardname="ARtwork"
            cardDetails={
              <>
                <b> Standard artwork size:</b>
                <p>
                  Oversize A5 (to fit A5 documents) <br />
                  Oversize A4 (to fit A4 inserts)
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

      <HeadingContent
        headername={"for Digital and Litho folders' pricing please give us a call on 020 3818 5750"}
        textTranform={"uppercase"}
      />
      <EnquiryForm/>
      <Map/>
    </>
  );
};

export default DisplayBoards;
