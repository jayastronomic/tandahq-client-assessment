import React from "react";
import EditOrganizationForm from "./EditOrganizationForm";
const EditOrganizationModal = (props) => {
  return (
    <div className="flex fixed inset-0 w-screen h-screen justify-center items-center">
      <button
        className="fixed h-full w-full bg-black bg-opacity-60"
        onClick={() => props.setIsEditOrganizationModalOpen(false)}
      ></button>
      <EditOrganizationForm
        authUser={props.authUser}
        setIsEditOrganizationModalOpen={props.setIsEditOrganizationModalOpen}
        selectedOrganization={props.selectedOrganization}
        addUpdatedOrganization={props.addUpdatedOrganization}
      />
    </div>
  );
};

export default EditOrganizationModal;
