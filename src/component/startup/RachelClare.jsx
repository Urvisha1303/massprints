import React from "react";
import StartupHeader from "../StartupHeader";
import StartupDetails from "../StartupDetails";
import MusicImg from "../MusicImg";

const RachelClare = () => {
  return (
    <>
      <StartupHeader headername={"Rachel clare"} headersubname={"Nutrition"} />
      <StartupDetails
        image={
          "https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rechelclare-logo.jpg"
        }
        details={
          "We helped nutritionist Rachel Clare to start her own business by designing her logo, business cards and website as part of our Start-Up Package. We also designed and printed a variety of Rachel's marketing materials including adverts and posters."
        }
      />

      <MusicImg musicimg={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-business-cards.jpg"}/>
      <MusicImg musicimg={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-flyers.jpg"}/>
      <MusicImg musicimg={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-poster.jpg"}/>
      <MusicImg musicimg={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-website1.jpg"}/>
      <MusicImg musicimg={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-website2.jpg"}/>
      <MusicImg musicimg={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Rachel-website3.jpg"}/>
    </>
  );
};

export default RachelClare;
