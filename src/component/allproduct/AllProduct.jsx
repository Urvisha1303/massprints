import React from "react";
import "./AllProduct.css";
import DesignCard from "../website/DesignCard";
import { Link } from "react-router-dom";
import business_card from "../../assets/business_Card.jpg";
import folder_Leaflets from "../../assets/folded_Leaflets.jpg";
import leaflets from "../../assets/leaflets.jpg";
import presentation_Folder from "../../assets/presentation_Folder.jpg";
import perfect_Bound_Booklets from "../../assets/perfect_Bound_Booklets.jpg";
import Saddle_Stitch_Booklet from "../../assets/Saddle_Stitch_Booklet.jpg";
import PostCard from "../../assets/PostCard.jpg";
import PostCard_Digital from "../../assets/PostCard_Digital.jpg";
const AllProduct = () => {
  return (
    <>
      <div className="w-full h-auto bg-color">
        <div className="h-68 py-20  md:mx-16 content-center	">
          <div>
            <h1 className="text-right text-4xl sm:text-5xl md:text-6xl px-10 sm:px-16 uppercase font-bold content-center	fontclr ">
              All products
            </h1>
          </div>
        </div>
        <div className="mx-6 sm:mx-10 md:mx-16 pd-10 hrline">
          <hr />
        </div>
      </div>

      <section className="text-gray-600 body-font mx-6 sm:mx-10 md:mx-16 h-auto">
        <div className="pt-16 pb-12 ">
          <div className="flex flex-wrap -m-4 justify-around">
            <Link to={"/business-cards"}>
              <DesignCard
                cardImagePath={business_card}
                cardText={"Business Cards"}
              />
            </Link>
            <Link to={"/brochures"}>
              <DesignCard
                cardImagePath={
                  "https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_brochures-768x512.jpg"
                }
                cardText={"Brochures"}
              />
            </Link>
            <Link to={"/banners"}>
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
                cardImagePath={folder_Leaflets}
                cardText={"Folded Leaflets"}
              />
            </Link>
            <Link to={"/leaflets-flyers"}>
              <DesignCard
                cardImagePath={leaflets}
                cardText={"Leaflets & Flyers"}
              />
            </Link>
            <Link to={"/presentation-folders"}>
              <DesignCard
                cardImagePath={presentation_Folder}
                cardText={"Presentation Folders"}
              />
            </Link>
            <Link to={"/perfect-bound-documents"}>
              <DesignCard
                cardImagePath={perfect_Bound_Booklets}
                cardText={"Perfect Bound Documents"}
              />
            </Link>
            <Link to={"/posters-large-format"}>
              <DesignCard
                cardImagePath={PostCard}
                cardText={"Posters (Large Format)"}
              />
            </Link>
            <Link to={"/posters"}>
              <DesignCard
                cardImagePath={PostCard_Digital}
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
            <Link to={"/saddle-stitched-booklets"}>
              <DesignCard
                cardImagePath={Saddle_Stitch_Booklet}
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
            <Link to={"/wire-bound-documents"}>
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
