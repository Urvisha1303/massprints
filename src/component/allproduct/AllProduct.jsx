import React from "react";
import "./AllProduct.css";
import DesignCard from "../website/DesignCard";
import { Link } from "react-router-dom";

const AllProduct = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  mx-20 content-center	">
          <div>
            <h1 className="text-right text-6xl uppercase font-bold content-center	fontclr ">
              All products
            </h1>
          </div>
        </div>
        <div className="mx-20 hrline ">
          <hr />
        </div>
      </div>

      <section className="text-gray-600 body-font mx-16 my-32 h-auto">
        <div className="px-5 mb-28 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link to={'/business-cards'}>
              <DesignCard
                cardImagePath={
                  "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/Business-cards-TLP-768x512.jpg"
                }
                cardText={"Business Cards"}
              />
            </Link>
            <Link to={'/brochures'}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_brochures-768x512.jpg"
              }
              cardText={"Brochures"}
            />
            </Link>
            <Link to={'/banners'}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_banners-768x512.jpg"
              }
              cardText={"Banners"}
            />
            </Link>
            <Link to={"/display-boards"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_compliment-768x512.jpg"
              }
              cardText={"Display Boards"}
            />
            </Link>
            <Link to={"/folded-leaflets"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Invoice-books2-1-768x512.jpg"
              }
              cardText={"Folded Leaflets"}
            />
            </Link>
            <Link to={'/leaflets-flyers'}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Leaflets-2-768x512.jpg"
              }
              cardText={"Leaflets & Flyers"}
            />
            </Link>
            <Link to={'/presentation-folders'}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_folders-768x512.jpg"
              }
              cardText={"Presentation Folders"}
            />
            </Link>
            <Link to={"/perfect-bound-documents"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Greeting-Cards-2-768x512.jpg"
              }
              cardText={"Perfect Bound Documents"}
            />
            </Link>
            <Link to={"/posters-large-format"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_postcards-768x512.jpg"
              }
              cardText={"Posters (Large Format)"}
            />
            </Link>
            <Link to={"/posters"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_posters-768x512.jpg"
              }
              cardText={"Posters (Digital & Litho)"}
            />
            </Link>
            <Link to={"/roller-banners"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Leaflets-2-768x512.jpg"
              }
              cardText={"Roller Banners"}
            />
            </Link>
            <Link to={"/roller-labels-stickers"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Leaflets-2-768x512.jpg"
              }
              cardText={"Roller Labels & Sticker Sheet Labels & Stickers"}
            />
            </Link>
            <Link to={"/stationery"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Leaflets-2-768x512.jpg"
              }
              cardText={"Stationery"}
            />
            </Link>
            <Link to={"/single-labels-stickers"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_invitations-768x512.jpg"
              }
              cardText={"Single Labels & Stickers"}
            />
            </Link>
            <Link to={'/saddle-stitched-booklets'}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_products_lookbook-768x512.jpg"
              }
              cardText={"Saddle Stitched Booklets"}
            />
            </Link>
            <Link to={"/window-stickers"}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_dissertation-768x512.jpg"
              }
              cardText={"Window Stickers"}
            />
            </Link>
            <Link to={'/wire-bound-documents'}>
            <DesignCard
              cardImagePath={
                "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents-768x512.jpg"
              }
              cardText={"Wire Bound Documents"}
            />
            </Link>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
