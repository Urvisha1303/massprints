import React, { useState } from "react";

const SliderHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0); // Track which button is active

  const slides = [
    {
      type: "text",
      content: (
        <>
          Excellent quality and service!Tom and Tomas were fantastic. <br />{" "}
          They were extremely efficient and reliable and I would 100% recommend
          them!
        </>
      ),
      name: "Lucilla Critchley",
    },
    {
      type: "text",
      content:
        "Excellent service and quality! Tomas was super helpful person, everything was delivered even faster than schedule. Also I'd like to mention the prices, don't be afraid to work with the guys - they are very similar to online printers or even cheaper and the service is waaaay better. Full recommendation from my side!",

      name: "Kuba Ba",
    },
    {
      type: "text",
      content:
        "These guys are the best.  I had a mishap on an international flight into London and the airline lost poster prints that I needed for business the next morning.  I called the London Printers in the morning from the airport, and they did four poster size prints in color by the afternoon for me to pick up.  Quality and price are great, too.",
      name: "Lydia Guo",
    },
    {
      type: "text",
      content: (
        <>
          Tomas was so helpful and friendly in advising us about print and paper
          type. <br />
          My wife and I will deffinately use his service again!
        </>
      ),
      name: "Matt Streatfield",
    },
    { type: "text", content: "Very quick good service and very helpful and I would definitely recommend.", name:"Aminah Mahmood" },
  ];

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setActiveButton(index); // Set the clicked button as active
  };

  return (
    <div
      id="indicators-carousel"
      className="relative bg-color mx-20 my-20"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-80 flex justify-center items-center overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center duration-700 ease-in-out slide ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            {slide.type === "text" && (
              <blockquote className="text-center p-8 px-60 text-xl pb-20">
                {slide.content}
                <h1 className="mt-4 text-lg font-semibold">{slide.name}</h1>
              </blockquote>
            )}
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleButtonClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ease-in-out transform ${
              index === activeButton ? "bg-black scale-125" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
