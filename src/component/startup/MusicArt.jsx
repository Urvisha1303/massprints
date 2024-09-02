import React from "react";
import "./StartUp.css";
import MusicImg from "../MusicImg";
import StartupDetails from "../StartupDetails";
import StartupHeader from "../StartupHeader";

const MusicArt = () => {
  return (
    <>
      <StartupHeader headername={"Music Art London"} headersubname={" Conceptual concerts"}/>
      <StartupDetails
        image={"https://thelondonprinters.co.uk/wp-content/uploads/2019/01/musicart-logo.jpg"}
        details={
          "MusicArt is a concept for creating and collaborating across art forms with music at the heart of each project. The London Printers designed the organisation's logo, business cards and website, and continues to design and print a variety of other materials including brochures and concert programmes."
        }
      />

      <MusicImg
        musicimg={
          "https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Musicart-business-cards-copy.jpg"
        }
      />

      <MusicImg
        musicimg={
          "https://thelondonprinters.co.uk/wp-content/uploads/2019/01/musicart-flyers-copy-1280x848.jpg"
        }
      />
      <MusicImg
        musicimg={
          "https://thelondonprinters.co.uk/wp-content/uploads/2019/01/Musicart-web.jpg"
        }
      />
    </>
  );
};

export default MusicArt;
