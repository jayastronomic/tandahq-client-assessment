import React from "react";

const ShiftCard = (props) => {
  return (
    <div className="flex justify-around space-x-1 text-center border-b border-l h-10 text-gray-500 font-medium">
      <div className="w-full border-r">{props.user_name}</div>
      <div className="w-full border-r">{props.shift_date}</div>
      <div className="w-full border-r">{props.start}</div>
      <div className="w-full border-r">{props.finish}</div>
      <div className="w-full border-r">{props.break_length}</div>
      <div className="w-full border-r">{props.hours_worked}</div>
      <div className="w-full border-r">{props.shift_cost}</div>
    </div>
  );
};

export default ShiftCard;
