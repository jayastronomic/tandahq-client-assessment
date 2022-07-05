import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Organizations from "../components/Organizations";

const API = "http://localhost:3001/organizations";
const Home = () => {
  const context = useOutletContext();

  return (
    <div className="flex flex-1 bg-gray-100 overflow-auto">
      <Organizations
        setIsEditOrganizationModalOpen={context.setIsEditOrganizationModalOpen}
        organizations={context.organizations}
        isLoading={context.isLoading}
        setSelectedOrganization={context.setSelectedOrganization}
      />
    </div>
  );
};

export default Home;
