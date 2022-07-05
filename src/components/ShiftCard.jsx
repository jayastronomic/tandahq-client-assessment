import React from "react";

const ShiftCard = (props) => {
  return (
    <div className="flex justify-around space-x-1 text-center border-b">
      <div className="w-full rounded border-r">Name</div>
      <div className="w-full rounded border-r">Date</div>
      <div className="w-full rounded border-r">Start</div>
      <div className="w-full rounded border-r">Finish</div>
      <div className="w-full rounded border-r">Break</div>
      <div className="w-full rounded border-r">Hours</div>
      <div className="w-full rounded border-r">Earned</div>
    </div>
  );
};

export default ShiftCard;
