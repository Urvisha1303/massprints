import React from "react";
import Card from "../Card";
import AccordionComponent from "../AccordionComponent";
import Map from "../Map";
import EnquiryForm from "./EnquiryForm";
import HeaderSection from "../HeaderSection";
import DetailsSection from "../DetailsSection";
import Saddle_Stitch_Booklet from "../../assets/Saddle_Stitch_Booklet.jpg";

const SaddleStitchedBooklets = () => {
  return (
    <>
      <HeaderSection
        name={
          <>
            Saddle Stitched <br /> Booklets
          </>
        }
      />
      <DetailsSection
        image={Saddle_Stitch_Booklet}
        description={
          <>
            {" "}
            Our saddle-stitched and perfect-bound booklets will help you make an
            impression on your clients, presenting your products and services in
            a high-quality, professional form.
          </>
        }
      />

      <section className="text-gray-600 body-font py-8 mx-16">
        <div className="grid grid-cols-3">
          <Card
            cardname="Paper stock"
            cardDetails={
              <>
                <p>
                  160gsm silk <br />
                  250gsm silk <br />
                  170gsm matt <br />
                  300gsm matt <br />
                  100gsm Conqueror, 300gsm Conqueror
                </p>
              </>
            }
          />
          <Card cardname="Printing Processes" cardDetails="Digital Colour" />
          <Card
            cardname="Finishing"
            cardDetails="Saddle-stitching or Perfect Binding"
          />
          <Card
            cardname="ARtwork"
            cardDetails={
              <>
                <b>Standard artwork size:</b>
                <p>
                  A5 (portrait and landscape) <br />
                  A4 (portrait)
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

      <EnquiryForm />
      <Map />
    </>
  );
};

export default SaddleStitchedBooklets;
