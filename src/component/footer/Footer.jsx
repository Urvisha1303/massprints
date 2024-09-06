import "./Footer.css";
import mastercard from "../../assets/mastercard.png";
import visadebit from "../../assets/visadebit.png";
import visa from "../../assets/visa.png";
import maestro from "../../assets/maestro.png";
import amex from "../../assets/amex.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-clr-blue dark:bg-gray-900 px-8">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-xs font-semibold  uppercase whitecolorfont">
                Contact
              </h2>
              <ul className="  whitecolorfont  text-xs">
                <p>
                  <h6 className="leading-6">Tel: 020 3818 5750</h6>
                  <h6>
                    Email:{" "}
                    <a
                      href="mailto:zTzPd@example.com"
                      className="footerfontcolor"
                    >
                      {" "}
                      zTzPd@example.com
                    </a>
                  </h6>
                </p>
                <br />
                <br />
                <p className="leading-6">
                  Opening Hours: <br />
                  Monday- Friday <br />
                  10:00AM- 5:00PM
                </p>
                <br />
                <br />
                <p className="leading-6">
                  Our address: <br />
                  1st Floor, Portland House <br /> 164 New Cavendish Street{" "}
                  <br /> London W1W 6YT
                </p>
                <br />
                <br />

                <p className="leading-6">By appointment only</p>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xs font-semibold whitecolorfont uppercase ">
                Products
              </h2>
              <ul className="  whitecolorfont text-xs leading-4">
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Booklets
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Brochures
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Business Cards
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Compliment Slips
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Copying
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Dissertations
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Greeting-cards
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Invitations
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Invoice-Books
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Leaflets & Flyers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Labels
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Letterheads
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Postcards
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Presentation Folders
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Roller-Banners
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Swing Tags
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Wedding-Stationery
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Wire Bound Documents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xs font-semibold whitecolorfont uppercase">
                quick links
              </h2>
              <ul className="whitecolorfont text-xs leading-4">
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    All Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Wedding Stationery
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Start-Up Business
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Digital Publications
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Design Studio
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Web Design
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xs font-semibold whitecolorfont uppercase">
                help
              </h2>
              <ul className="whitecolorfont text-xs leading-4">
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    payment
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Delivery and Collection
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Supplying Artwork
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Our Promise
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Why choose Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Re-ordering
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Paper Options
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Print Process
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Business Orders
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Events Orders
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footerfontcolor">
                    Cookie Policy
                  </a>
                </li>
              </ul>
              <br />
              <br />
              <h2 className="mb-6 text-xs font-semibold whitecolorfont uppercase">
                WE accept payment
              </h2>
              <div className="grid grid-cols-3 gap-2 pb-8 gap-y-10 gap-x-3">
              <img
                src={visa}
                alt="payment"
              />
              <img src={visadebit} alt="" />
              <img
                src={mastercard}
                alt="payment"
              />
              <img
                src={amex}
                alt="payment"
              />
              <img
                src={maestro}
                alt="payment"
              />
              </div>
              
            </div>
          </div>
        </div>
      </footer>
      <hr  className="bg-clr-blue"/>
      <div className="bg-clr-blue dark:bg-gray-900 px-8">
      <div className="px-4 py-6  md:flex md:items-center md:justify-between">
        <span className="text-sm whitecolorfont  sm:text-center hitecolorfont">
          © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
          Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse whitecolorfont">
          <a
            href="https://www.facebook.com"
            className="whitecolorfont dark:hover:text-white"
          >
            <i className="fa-brands fa-facebook-f footerfontcolor"></i>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://www.instagram.com"
            className="whitecolorfont dark:hover:text-white"
          >
            <i className="fa-brands fa-instagram footerfontcolor"></i>
            <span className="sr-only">Discord community</span>
          </a>
          <a
            href="mailto:info@thelondonprinters.co.uk"
            className="whitecolorfont dark:hover:text-white"
          >
            <i className="fa-solid fa-envelope footerfontcolor"></i>
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="https://github.com"
            className="whitecolorfont dark:hover:text-white"
          >
            <i className="fa-brands fa-github"></i>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
