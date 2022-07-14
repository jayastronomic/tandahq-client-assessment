import React from "react";
import AddShiftForm from "./AddShiftForm";

const AddShiftModal = (props) => {
  return (
    <div className="flex fixed inset-0 justify-center items-center">
      <button
        className="fixed h-full w-full bg-black bg-opacity-60"
        onClick={() => props.setIsAddShiftModalOpen(false)}
      ></button>

      <AddShiftForm
        authUser={props.authUser}
        setIsAddShiftModalOpen={props.setIsAddShiftModalOpen}
        addShift={props.addShift}
      />
    </div>
  );
};

export default AddShiftModal;
