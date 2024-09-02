
import { Carousel } from "@material-tailwind/react";
const Slider = ({sliderImage1, sliderImage2, sliderImage3 }) => {
  return (
    <div>
     <Carousel className="rounded-xl">
      <img
        src={sliderImage1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={sliderImage2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={sliderImage3}
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  );
};

export default Slider;
