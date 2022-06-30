import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import OrganizationCard from "../components/OrganizationCard";

const OrganizationContainer = (props) => {
  if (props.organizations.length === 0) {
    return (
      <div className="flex flex-col flex-1 justify-center">
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
      <div className="flex flex-col px-2">
        <div className="flex w-full text-white font-medium space-x-2 pb-2">
          <div className="w-1/2 bg-blue-500 rounded pl-2">Name</div>
          <div className="w-1/2 bg-blue-500 rounded pl-2">Hourly Rate</div>
        </div>
        {props.organizations.map((organization, i) => {
          return <OrganizationCard organization={organization} key={i} />;
        })}
      </div>
    );
  }
};

export default OrganizationContainer;
