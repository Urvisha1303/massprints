import React from "react";
import AccordionComponent from "../AccordionComponent";
import Table from "../Table";
import EnquiryForm from "./EnquiryForm";
import Card from "../Card";
import DetailsSection from "../DetailsSection";
import HeaderSection from "../HeaderSection";
import perfect_Bound_Booklets from "../../assets/perfect_bound_booklets.jpg";

const PerfectBoundDocument = () => {
  return (
    <>
      <HeaderSection name={" Perfect Bound Documents"} />
      <DetailsSection
        image={perfect_Bound_Booklets}
        description={
          <>
            {" "}
            Wire binding is an excellent solution, especially when
            professional-looking documents are required at short notice. Every
            wire-bound document includes a transparent acetate cover and card at
            the back, and can be printed on a variety of matt and silk stocks.
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
                  Inserts – choice of: <br />
                  100gsm silk <br />
                  160gsm silk <br />
                  170gsm matt <br />
                  <br />
                  Covers – choice of: <br />
                  300gsm matt <br />
                  350gsm silk
                </p>
              </>
            }
          />
          <Card cardname="Printing Processes" cardDetails="Digital" />
          <Card cardname="Finishing" cardDetails="Wire-binding" />
          <Card
            cardname="ARtwork"
            cardDetails={
              <>
                <b> Standard size:</b>
                <p>
                  A5 (210 x 148 mm) <br />
                  A4 (210 x 297 mm) <br />
                  A3 (297 x 420mm)
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

      <Table />
      <EnquiryForm />
      
    </>
  );
};

export default PerfectBoundDocument;
