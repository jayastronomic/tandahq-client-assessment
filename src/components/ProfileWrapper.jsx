import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import ProfileInformation from "./ProfileInformatiom";
import AddOrganizationModal from "./AddOrganizationModal";
import EditOrganizationModal from "./EditOrganizationModal";

const API = "http://localhost:3001/organizations";
const ProfileWrapper = (props) => {
  useEffect(() => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        setOrganizations(resObj);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const [organizations, setOrganizations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOrganizationModalOpen, setIsEditOrganizationModalOpen] =
    useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState({});

  const addOrganization = (newOrganization) => {
    console.log(newOrganization);
    setOrganizations([newOrganization, ...organizations]);
  };
  const addUpdatedOrganization = (updatedOrganization) => {
    let currentOrganizations = organizations;
    const updatedOrganizations = currentOrganizations.map((organization) => {
      if (organization.id !== updatedOrganization.id) {
        return organization;
      } else {
        return updatedOrganization;
      }
    });
    setOrganizations(updatedOrganizations);
  };

  return (
    <div className="flex flex-col p-10 bg-gray-100 space-y-2 md:flex-row md:space-x-4 md:space-y-0 h-screen">
      <ProfileInformation
        {...props.authUser}
        isLoading={props.isLoading}
        setIsOpen={setIsOpen}
      />
      <Outlet
        context={{
          organizations: organizations,
          isLoading: isLoading,
          setIsEditOrganizationModalOpen: setIsEditOrganizationModalOpen,
          setSelectedOrganization: setSelectedOrganization,
        }}
      />
      {isOpen && (
        <AddOrganizationModal
          setIsOpen={setIsOpen}
          addOrganization={addOrganization}
          authUser={props.authUser}
        />
      )}
      {isEditOrganizationModalOpen && (
        <EditOrganizationModal
          setIsEditOrganizationModalOpen={setIsEditOrganizationModalOpen}
          authUser={props.authUser}
          selectedOrganization={selectedOrganization}
          addUpdatedOrganization={addUpdatedOrganization}
        />
      )}
    </div>
  );
};

export default ProfileWrapper;
