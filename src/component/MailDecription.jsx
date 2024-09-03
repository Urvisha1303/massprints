

const MailDecription = ({ headername, details }) => {
  return (
      <div className="p-4 w-1/3 mb-14 flex  ">
        <div className=" flex flex-wrap py-6 ">
          <h1 className="uppercase font-bold text-2xl text-black pb-6 borderbt inline-block">
            {headername}
          </h1>
          <hr />
          <p className="text-sm mt-6 leading-7">{details}</p>
        </div>
      </div>
  );
};

export default MailDecription;
