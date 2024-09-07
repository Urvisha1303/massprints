import React from "react";
import "./CardHome.css";
import { Link } from "react-router-dom";

const CardHome = () => {
  return (
    <>
      <div className="mx-16 my-20">
        <div className="card__container grid grid-cols-4">
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Greeting-Cards-2.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Display Boards</h2>
              <Link to="/display-boards" className="card__button">
                Read More
              </Link>
            </div>
          </article>

          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2019/10/wedding.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Wedding stationery</h2>
              <Link to="/wedding" className="card__button">
                Read More
              </Link>
            </div>
          </article>

          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2021/08/Mail-service-scaled.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Direct Mail services</h2>
              <Link to="/directmail" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Wire Bound Documents</h2>
              <Link to="/wire-bound-documents" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Wire Bound Documents</h2>
              <Link to="/wire-bound-documents" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Wire Bound Documents</h2>
              <Link to="/wire-bound-documents" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Wire Bound Documents</h2>
              <Link to="/wire-bound-documents" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2020/01/TheLondonPrinters_Homepage_Wire-binding-documents.jpg"
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Wire Bound Documents</h2>
              <Link to="/wire-bound-documents" className="card__button">
                Read More
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default CardHome;
