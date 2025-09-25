import React from "react";

type Props = {};

const CareAndCleaning = (props: Props) => {
  return (
    <div
      className="flex-1 flex flex-col gap-10 px-6 md:px-20 py-16 pt-20 items-center justify-center"
      style={{ backgroundColor: "#e8e4e1" }}
    >
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2 uppercase ">
          Clean and caring
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How to keep leather looking its best
        </h1>
      </div>
      <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg w-max transition">
        Learn More
      </button>
    </div>
  );
};

export default CareAndCleaning;
