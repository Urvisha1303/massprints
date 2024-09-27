import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Saddle_Stitch_Booklet from "../assets/Product_Lables.jpg";
import folder_Leaflets_1 from "../assets/Folded_leaflets_1.jpg";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <Carousel className="h-96 overflow-hidden">
      <div className="relative h-96 w-full">
        <img
          src={Saddle_Stitch_Booklet}
          alt="image 1"
          className=" h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full place-items-center">
          <div className="w-3/4 text-end ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl mondapick md:text-4xl lg:text-5xl"
            >
              Saddle Stitched <br /> Booklets
            </Typography>
            
            <div className="flex justify-end gap-2 mondapick">
              <Link to={"/saddle-stitched-booklets"}>
              <Button size="lg" color="white" className="mondapick">
                Explore
              </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 w-full">
        <img
          src={folder_Leaflets_1}
          alt="image 2"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full place-items-center">
          <div className="w-3/4 text-end">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl mondapick md:text-4xl lg:text-5xl"
            >
              Folded leaflets
            </Typography>
            <div className="flex justify-end gap-2 ">
              <Link to={"/folded-leaflets"}>
              <Button size="lg" color="white" className="mondapick">
                Explore
              </Button>
              </Link>
             
          </div>
        </div>
        </div>
      </div>
     
    </Carousel>
  );
};

export default HomeSlider;
