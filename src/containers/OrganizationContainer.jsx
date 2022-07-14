import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import OrganizationCard from "../components/OrganizationCard";
import Spinner from "../components/Spinner";
const OrganizationContainer = (props) => {
  if (props.isLoading) {
    return <Spinner />;
  }
  if (props.organizations.length === 0) {
    return (
      <div className="flex flex-col justify-center min-h-screen">
        <p className="self-center text-center text-sm font-medium text-gray-400">
          There aren't any organizations. Create a new one.
        </p>
        <FontAwesomeIcon
          className="text-gray-500 pt-4"
          icon={solid("users")}
          size="2x"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col p-2 overflow-hidden shadow">
        <div className="flex w-full text-white font-medium space-x-2 pb-2">
          <div className="w-1/2 bg-blue-500 pl-2">Name</div>
          <div className="w-1/2 bg-blue-500 pl-2">Hourly Rate</div>
          <div className="w-1/2 bg-blue-500 pl-2">Joined?</div>
        </div>
        <div className="overflow-y-auto">
          {props.organizations.map((organization, i) => {
            return (
              <OrganizationCard
                setSelectedOrganization={props.setSelectedOrganization}
                setIsEditOrganizationModalOpen={
                  props.setIsEditOrganizationModalOpen
                }
                authUser={props.authUser}
                {...organization}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default OrganizationContainer;
