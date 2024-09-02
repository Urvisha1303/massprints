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
import MusicArt from "./component/startup/musicart";
import RachelClare from "./component/startup/RachelClare";

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
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
