import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import ShiftCard from "../components/ShiftCard";

const ShiftContainer = (props) => {
  if (props.shifts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1">
        <h3 className="text-gray-400 font-medium">No Shifts Available</h3>
        <FontAwesomeIcon
          className="text-gray-500"
          icon={solid("clock")}
          size="2x"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="flex justify-around space-x-1 text-center text-white border-b">
          <div className="bg-blue-500 w-full rounded-t">Name</div>
          <div className="bg-blue-500 w-full rounded-t">Date</div>
          <div className="bg-blue-500 w-full rounded-t">Start</div>
          <div className="bg-blue-500 w-full rounded-t">Finish</div>
          <div className="bg-blue-500 w-full rounded-t">Break</div>
          <div className="bg-blue-500 w-full rounded-t">Hours</div>
          <div className="bg-blue-500 w-full rounded-t">Earned</div>
        </div>
        {props.shifts.map((shift, i) => {
          return <ShiftCard {...shift} key={i} />;
        })}
      </div>
    );
  }
};

export default ShiftContainer;
