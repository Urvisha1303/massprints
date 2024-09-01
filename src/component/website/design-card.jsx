

// eslint-disable-next-line react/prop-types
const DesignCard = ({ cardImagePath, cardText }) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
      <a className="block relative h-60 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={cardImagePath}
        />
      </a>
      <div className="mt-4">
        <h3 className=" text-sm tracking-wide text-black posternamehover  mb-1">
          {cardText}
        </h3>
      </div>
    </div>
  );
};

export default DesignCard;
