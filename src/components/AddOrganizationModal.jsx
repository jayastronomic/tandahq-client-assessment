import React from "react";
import OrganizationForm from "./OrganizationForm";
const AddOrganizationModal = (props) => {
  return (
    <div className="flex fixed inset-0 w-screen h-screen justify-center items-center">
      <button
        className="fixed h-full w-full bg-black bg-opacity-60"
        onClick={() => props.setIsOpen(false)}
      ></button>
      <OrganizationForm />
    </div>
  );
};

export default AddOrganizationModal;
