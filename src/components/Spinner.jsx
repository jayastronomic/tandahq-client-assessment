import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="animate-spin relative flex items-center justify-center bg-gray-300 w-20 h-20 rounded-full">
        <div className="self-start w-4 h-4 bg-white"></div>
        <div className="absolute rounded-full w-16 h-16 bg-white border-black"></div>
      </div>
    </div>
  );
};

export default Spinner;
