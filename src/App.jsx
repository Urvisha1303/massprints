import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Design from "./component/design/Design";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Website from "./component/website/Website";
import DigitalPublication from "./component/digitalpublication/DigitalPublication";
import StartUp from "./component/startup/StartUp";
import MusicArt from "./component/startup/MusicArt";
import RachelClare from "./component/startup/RachelClare";
import DirectMail from "./component/directmail/DirectMail";
import Wedding from "./component/wedding/Wedding";
import AllProduct from "./component/allproduct/AllProduct";
import SaddleStitchedBooklets from "./component/allproduct/SaddleStitchedBooklets";
import Brochures from "./component/allproduct/Brochures";
import BusinessCards from "./component/allproduct/BusinessCards";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/website" element={<Website />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/digitalpublication" element={<DigitalPublication/>}></Route>
          <Route path="/startup" element={<StartUp/>}></Route>
          <Route path="/musicart" element={<MusicArt/>}></Route>
          <Route path="/rachelclare" element={<RachelClare/>}></Route>
          <Route path="/directmail" element={<DirectMail/>}></Route >
          <Route path="/wedding" element={<Wedding/>}></Route>
          <Route path="/allproduct" element={<AllProduct/>} ></Route >
          <Route path="/saddle-stitched-booklets" element={<SaddleStitchedBooklets/>}></Route>
          <Route path="/brochures" element={<Brochures/>}></Route>
          <Route path="/business-cards" element={<BusinessCards/>}> </Route>

        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <MegaMenuProduct/> */}
    </>
  );
}

export default App;
