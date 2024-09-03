import './wedding/Wedding.css'

const Card = ({cardDetails, cardname}) => {
  return (
    <div className="p-4 w-1/4 mb-6 flex">
      <div className="flex w-full h-full flex-col border-l border-b borderblue">
        <div className="mr-4 pl-4 pr-2 pt-8 border-gray-200 border-opacity-60">
          <h2 className="text-lg tracking-wide uppercase text-black font-black font-medium title-font pb-4 inline-block borderbtblack">
            {cardname}
          </h2>
          <hr className=" pb-6" />
          <div className="flex-grow pb-6">
              <p className="leading-relaxed text-sm leading-7">{cardDetails}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
