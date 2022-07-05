import React from "react";
import OrganizationContainer from "../containers/OrganizationContainer";
import Spinner from "./Spinner";

const Organizations = (props) => {
  return (
    <div className="flex flex-col flex-1 bg-white rounded shadow-md border border-gray-200  max-h-screen">
      <div className="text-2xl font-medium text-gray-700 self-center py-2">
        Organizations
      </div>
      <OrganizationContainer
        setIsEditOrganizationModalOpen={props.setIsEditOrganizationModalOpen}
        organizations={props.organizations}
        isLoading={props.isLoading}
        setSelectedOrganization={props.setSelectedOrganization}
      />
    </div>
  );
};

export default Organizations;
