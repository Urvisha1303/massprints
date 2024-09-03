import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  accordion,
} from "@material-tailwind/react";
const AccordionComponent = ({accordiondetails,accordionHeader }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors text-lg uppercase 
          }`}
        >
          {accordionHeader}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
            {accordiondetails}
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionComponent;
