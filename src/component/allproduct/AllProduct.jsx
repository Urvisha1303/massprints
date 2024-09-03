import React from "react";
import "./AllProduct.css";
import DesignCard from "../website/DesignCard";

const AllProduct = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	 ">
              All products
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline ">
          <hr />
        </div>
      </div>

      <section className="text-gray-600 body-font mx-16 my-32">
        <div className="container px-5 mb-28 mx-auto">
          <div className="flex flex-wrap -m-4">
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/Business-cards-TLP-768x512.jpg"
              }
              cardText={"Business Cards"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents-768x512.jpg"
              }
              cardText={"Wire Bound Documents"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_products_lookbook-768x512.jpg"
              }
              cardText={"Saddle Stitched Booklets"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Leaflets-2-768x512.jpg"
              }
              cardText={"Leaflets & Flyers"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_postcards-768x512.jpg"
              }
              cardText={"Postcards"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_dissertation-768x512.jpg"
              }
              cardText={"Dissertations"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_letterheads-768x512.jpg"
              }
              cardText={"Letterheads"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_posters-768x512.jpg"
              }
              cardText={"Posters"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_compliment-768x512.jpg"
              }
              cardText={"Compliment Slips"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_copying-1-768x512.jpg"
              }
              cardText={"Copying"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_invitations-768x512.jpg"
              }
              cardText={"Invitations"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_folders-768x512.jpg"
              }
              cardText={"Presentation Folders"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_brochures-768x512.jpg"
              }
              cardText={"Brochures"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_swing-tags-768x512.jpg"
              }
              cardText={"Swing Tags"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_wedding2-768x512.jpg"
              }
              cardText={"Wedding Stationery"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Invoice-books2-1-768x512.jpg"
              }
              cardText={"Invoice Books"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Labels-768x512.jpg"
              }
              cardText={"Labels"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Greeting-Cards-2-768x512.jpg"
              }
              cardText={"Greeting Cards"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_banners-768x512.jpg"
              }
              cardText={"Roller Banners"}
            />
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Leaflets-2-768x512.jpg"
              }
              cardText={"Showcards"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
