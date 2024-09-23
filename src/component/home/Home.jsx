import "./Home.css";
import HomeSlider from "../HomeSlider";
import CardHome from "./CardHome";
import LogoHome from "./LogoHome";
import SliderHome from "./SliderHome";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <div className="w-full h-auto lg:mb-20">
        <div className="h-72 py-10 md:py-20 mx-6 md:mx-20 content-center	relative">
          <hr className="w-full absolute top-12 md:top-24 hrline" />
          <div className="w-full grid md:grid-cols-2 my-8 md:my-16 theme-color">
            <div className="sm:pr-6">
              <h1 className="text-2xl md:text-xl uppercase font-bold	">opening Hours:</h1>
              <h1 className= "text-2xl md:text-xl uppercase font-bold	sm:pb-6">
                Monday - Friday from 10am to 5pm
              </h1>
              <p>by appointment only</p>
            </div>
            <div className="text-end text-center font-bold ">
              <h1 className="uppercase text-4xl pt-6">Our Top SELLERS</h1>
            </div>
          </div>
          <hr className="w-full absolute top-50 hrline" />
        </div>
      </div>
      <CardHome />

      <div className="w-full h-auto mb-6 md:mb-20">
        <div className="h-auto py-10 md:py-20 mx-6 md:mx-20 content-center	relative">
          <hr className="w-full absolute top-24 hrline" />
          <div className="w-full grid  md:grid-cols-2 my-16">
            <div className="  "></div>
            <div className="text-end text-center font-bold	">
              <h1 className="theme-color uppercase text-4xl md:text-3xl pt-6">
                Same-day delivery is now available <br />
                on some digitally-printed products
              </h1>
            </div>
          </div>
          <hr className="w-full absolute top-50 hrline" />
        </div>
      </div>

      {/* <div className="mx-20 pt-10">
        <hr className="w-full hrline" />
      </div> */}
      <SliderHome />
      {/* <div className="mx-20">
        <hr className="w-full hrline" />
      </div> */}

      {/* <div className="mx-20 pt-40">
        <hr className="w-full hrline" />
      </div> */}
      <LogoHome />
      {/* <div className="mx-20">
        <hr className="w-full hrline" />
      </div> */}

      <div className="sliderbg ">
        <div className="h-auto mx-6 md:mx-20 mt-10 md:mt-20 mb-10 md:mb-40 ">
          <div className="sliderbg w-full h-auto ">
            <h1 className="text-center pt-6 text-2xl">
              Stay up to date and receive our latest promotions{" "}
            </h1>
            <div className="md:flex justify-center mt-6 h-20 ">
              <input
                type="text"
                placeholder="Email Address"
                className="width-full h-8 w-96 bg-offwhite rounded-md md:pl-4 text-sm mb-4"
              />
              <button className="h-8 w-28 bg-offwhite md:ml-2 rounded-md uppercase text-sm bg-zinc-300	bghomeclr">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
