import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["QUANTITY", "1-SIDED", "2-SIDED"];

const TABLE_ROWS = [
  {
    QUANTITY: 50,
    "1-SIDED": "£30.00 + VAT",
    "2-SIDED": "£35.00 + VAT",
  },
  {
    QUANTITY: 100,
    "1-SIDED": "£50.00 + VAT",
    "2-SIDED": "£55.00 + VAT",
  },
  {
    QUANTITY: 200,
    "1-SIDED": "£90.00 + VAT",
    "2-SIDED": "£100.00 + VAT",
  },
  {
    QUANTITY: 500,
    "1-SIDED": "£200.00 + VAT",
    "2-SIDED": "£220.00 + VAT",
  },
];

const Table = () => {
  return (
    <div className="mx-16 mb-10">
      <Card className="h-full w-full ">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.QUANTITY}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row["1-SIDED"]}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row["2-SIDED"]}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Table;
