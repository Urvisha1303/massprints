import React from "react";
import "./CardHome.css";

const CardHome = () => {
  return (
    <>
      <div className="mx-16 my-20">
        <div className="card__container grid grid-cols-4">
          <article className="card__article">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image"
              className="card__img"
            />

            <div className="card__data">
              <span className="card__description">
                Vancouver Mountains, Canada
              </span>
              <h2 className="card__title">The Great Path</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2019/10/wedding.jpg"
              alt="image"
              className="card__img"
            />

            <div className="card__data">
              <span className="card__description">Poon Hill, Nepal</span>
              <h2 className="card__title">Starry Night</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>

          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2021/08/Mail-service-scaled.jpg"
              alt="image"
              className="card__img"
            />

            <div className="card__data">
              <span className="card__description">Bojcin Forest, Serbia</span>
              <h2 className="card__title">Path Of Peace</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>
          <article className="card__article">
            <img
              src="https://thelondonprinters.co.uk/wp-content/uploads/2021/08/Mail-service-scaled.jpg"
              alt="image"
              className="card__img"
            />

            <div className="card__data">
              <span className="card__description">Bojcin Forest, Serbia</span>
              <h2 className="card__title">Path Of Peace</h2>
              <a href="#" className="card__button">
                Read More
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default CardHome;
