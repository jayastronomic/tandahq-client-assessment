import React from "react";
import OrganizationContainer from "../containers/OrganizationContainer";

const orgs = [1];

const Organizations = () => {
  return (
    <div className="flex flex-col bg-white rounded shadow-md border border-gray-200 flex-1">
      <div className="text-2xl font-medium text-gray-700 self-center py-2">
        Organizations
      </div>
      <OrganizationContainer organizations={orgs} />
    </div>
  );
};

export default Organizations;
