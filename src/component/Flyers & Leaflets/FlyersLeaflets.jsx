import React from "react";
import flyers from "../../assets/flyers.jpg";
import './FlyersLeaflets.css'

const FlyersLeaflets = () => {
  const data = [
    {
      qty: "125",
      "130gsm": "$45",
      "170gsm": "$55",
    },
    {
      qty: "250",
      "130gsm": "$80",
      "170gsm": "$95",
    },
    {
      qty: "500",
      "130gsm": "$150",
      "170gsm": "$180",
    },
    {
      qty: "1000",
      "130gsm": "$280",
      "170gsm": "$330",
    },
  ];
  return (
    <>
      <div className="mx-20 my-20 grid grid-cols-2 ">
        <div className=" px-6 ">
          <img src={flyers} alt="" />
        </div>
        <div className="px-10 text-black">
          <h1 className=" pb-10 font-bold  text-3xl text-black">
            Flyers Printing
          </h1>
          <p className="pb-6">
            Flyers & Leaflets are the perfect way to promote your business and
            stand out from the crowd. Flyers & leaflets containing advertising
            or promoting messages to promote and market products and services. A
            leaflets & flyers is a small sheet, flat or folded, of printed
            material meant to provide information or advertisement. A flyer is a
            form of paper advertisement intended for wide distribution and
            typically posted or distributed in a public place, handed out to
            individuals. Increase your market with flyers and leaflets, and
            create a flyer that suits you best from our wide range of sizes and
            styles.
          </p>
          {/* <p>
            <span>
              <b>Note:</b>
            </span>{" "}
            For price click here :{" "}
            <button className="border-2 border-black px-4 py-1">
              Rate Calculator
            </button>
          </p> */}
        </div>
      </div>

      <div className="mx-20 my-10 px-6 ">
        <h1 className="text-2xl font-bold text-black">Price:</h1>
        <div colSpan="2" className="grid grid-cols-2 gap-10">
          <div >
            <div className="overflow-x-auto ">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="tableRowbg">
                    <th
                      colSpan="5"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                     Size (A3)
                    </th>
                  </tr>
                  <tr className="tableHeadbg">
                    <th
                      rowSpan="2" colSpan="1"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                      Quantity
                    </th>
                    <th
                      colSpan="2"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                      130 GSM
                    </th>
                    <th
                      colSpan="2"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                      170 GSM
                    </th>
                  </tr>
                  <tr className="tableHeadbg">
                    <th colSpan="2" className="py-2 px-4 border-b-2 text-center">
                      Single Side /Back 2 Back
                    </th>
                   
                    <th className="py-2 px-4 border-b-2 text-center">
                      Single Side /Back 2 Back
                    </th>
                   
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-center">
                        {item.qty}
                      </td>
                      <td colSpan="2" className="py-2 px-4 border-b text-center">
                      {item['130gsm']}
                      </td>
                      <td colSpan="2" className="py-2 px-4 border-b text-center">
                      {item['170gsm']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div >
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="tableRowbg">
                    <th
                      colSpan="5"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                     Size (A5)
                    </th>
                  </tr>
                  <tr className="tableHeadbg">
                    <th
                      rowSpan="2" colSpan="1"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                      Quantity
                    </th>
                    <th
                      colSpan="2"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                      130 GSM
                    </th>
                    <th
                      colSpan="2"
                      className="py-2 px-4 border-b-2 text-center"
                    >
                      170 GSM
                    </th>
                  </tr>
                  <tr className="tableHeadbg">
                    <th colSpan="2" className="py-2 px-4 border-b-2 text-center">
                      Single Side /Back 2 Back
                    </th>
                   
                    <th className="py-2 px-4 border-b-2 text-center">
                      Single Side /Back 2 Back
                    </th>
                   
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-center">
                        {item.qty}
                      </td>
                      <td colSpan="2" className="py-2 px-4 border-b text-center">
                      {item['130gsm']}
                      </td>
                      <td colSpan="2" className="py-2 px-4 border-b text-center">
                      {item['170gsm']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FlyersLeaflets;
