import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Organizations from "../components/Organizations";

const Home = (props) => {
  const context = useOutletContext();

  return (
    <div className="flex flex-1 bg-gray-100 overflow-auto">
      <Organizations
        setIsEditOrganizationModalOpen={context.setIsEditOrganizationModalOpen}
        organizations={context.organizations}
        isLoading={context.isLoading}
        setSelectedOrganization={context.setSelectedOrganization}
        authUser={props.authUser}
      />
    </div>
  );
};

export default Home;
