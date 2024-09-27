import React from "react";
import "./CardHome.css";
import { Link } from "react-router-dom";
import business_card from "../../assets/business_Card.jpg";
import folder_Leaflets from "../../assets/folded_Leaflets.jpg";
import leaflets from "../../assets/leaflets.jpg";
import presentation_Folder from "../../assets/presentation_Folder.jpg";
import perfect_Bound_Booklets from "../../assets/perfect_Bound_Booklets.jpg";
import Saddle_Stitch_Booklet from "../../assets/Saddle_Stitch_Booklet.jpg";
import PostCard from "../../assets/PostCard.jpg";
import PostCard_Digital from "../../assets/PostCard_Digital.jpg";

const CardHome = () => {
  return (
    <>
      <div className="mx-6 md:mx-20 my-6 md:my-20">
        <div className="card__container grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 w-full">
          <article className="card__article">
            <img
              src={business_card}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Business Cards</h2>
              <Link to="/business-cards" className="card__button">
                Read More
              </Link>
            </div>
          </article>

          <article className="card__article">
            <img
              src={folder_Leaflets}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Folded Leaflets</h2>
              <Link to="/folded-leaflets" className="card__button">
                Read More
              </Link>
            </div>
          </article>

          <article className="card__article">
            <img
              src={leaflets}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Leaflets & Flyers</h2>
              <Link to="/leaflets-flyers" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src={presentation_Folder}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Presentation Folders</h2>
              <Link to="/presentation-folders" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src={perfect_Bound_Booklets}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Perfect Bound Documents</h2>
              <Link to="/perfect-bound-documents" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src={Saddle_Stitch_Booklet}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Saddle Stitched Booklets</h2>
              <Link to="/saddle-stitched-booklets" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src={PostCard}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Posters (Large Format)</h2>
              <Link to="/posters-large-format" className="card__button">
                Read More
              </Link>
            </div>
          </article>
          <article className="card__article">
            <img
              src={PostCard_Digital}
              alt="image"
              className="card__img h-64 rounded-xl"
            />

            <div className="card__data">
              <h2 className="card__title">Posters (Digital & Litho)</h2>
              <Link to="/posters" className="card__button">
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
