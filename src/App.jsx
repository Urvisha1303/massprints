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
import WireBoundDocuments from "./component/allproduct/WireBoundDocuments";
import LeafletsFlyers from "./component/allproduct/LeafletsFlyers";
import PresentationFolders from "./component/allproduct/PresentationFolders";
import Posters from "./component/allproduct/Posters";
import RollerBanners from "./component/allproduct/RollerBanners";
import Card from "./component/Card";
import Banners from "./component/allproduct/Banners";
import DisplayBoards from "./component/allproduct/DisplayBoards";
import FoldedLeaflets from "./component/allproduct/FoldedLeaflets";
import PerfectBoundDocument from "./component/allproduct/PerfectBoundDocument";
import PostersLargeFormat from "./component/allproduct/PostersLargeFormat";
import RollerLabel from "./component/allproduct/RollerLabel";
import Stationery from "./component/allproduct/Stationery";
import SingleLabelStickers from "./component/allproduct/SingleLabelStickers";
import WindowStickers from "./component/allproduct/WindowStickers";
import Home from "./component/home/Home";
import { MegaMenuDefault } from "./component/header/h";

function App() {
  return (
    <>
      <BrowserRouter>
         <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/website" element={<Website />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/digitalpublication"
            element={<DigitalPublication />}
          ></Route>
          <Route path="/startup" element={<StartUp />}></Route>
          <Route path="/musicart" element={<MusicArt />}></Route>
          <Route path="/rachelclare" element={<RachelClare />}></Route>
          <Route path="/directmail" element={<DirectMail />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          <Route path="/allproduct" element={<AllProduct />}></Route>
          <Route
            path="/saddle-stitched-booklets"
            element={<SaddleStitchedBooklets />}
          ></Route>
          <Route path="/brochures" element={<Brochures />}></Route>
          <Route path="/business-cards" element={<BusinessCards />}>
            {" "}
          </Route>
          <Route
            path="/wire-bound-documents"
            element={<WireBoundDocuments />}
          ></Route>
          <Route path="/leaflets-flyers" element={<LeafletsFlyers />}></Route>
          <Route
            path="/presentation-folders"
            element={<PresentationFolders />}
          ></Route>
          <Route path="/posters" element={<Posters />}></Route>
          <Route path="/roller-banners" element={<RollerBanners />}></Route>
          <Route path="/banners" element={<Banners />}></Route>
          <Route path="/display-boards" element={<DisplayBoards />}></Route>
          <Route path="/folded-leaflets" element={<FoldedLeaflets />}></Route>
          <Route
            path="/perfect-bound-documents"
            element={<PerfectBoundDocument />}
          ></Route>
          <Route
            path="/posters-large-format"
            element={<PostersLargeFormat />}
          ></Route>
          <Route
            path="/roller-labels-stickers"
            element={<RollerLabel />}
          ></Route>
          <Route path="/stationery" element={<Stationery />}></Route>
          <Route
            path="/single-labels-stickers"
            element={<SingleLabelStickers />}
          ></Route>
          <Route path="/window-stickers" element={<WindowStickers />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;
