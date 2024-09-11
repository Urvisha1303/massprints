import "./DesignCard.css";
// eslint-disable-next-line react/prop-types
const DesignCard = ({ cardImagePath, cardText }) => {
  return (
    <div className="box p-4 w-full">
      <div className="card ">
        <div className="imgBx">
          <img
            src={cardImagePath}
            alt="images"
            className="object-cover object-center w-full h-full "
          />
        </div>
        <div className="details text-lg md:text-sm tracking-wide text-black posternamehover  mb-1">
          <h2>{cardText}</h2>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
