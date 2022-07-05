import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const API = "http://localhost:3001/leave_organization";

const OrganizationCard = (props) => {
  const [authUserjoined, setAuthUserJoined] = useState(props.auth_user_joined);
  const leaveOrganization = () => {
    fetch(API + `/${props.id}`, { method: "DELETE", credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => setAuthUserJoined(resObj.authUserjoined))
      .catch((err) => console.log(err));
  };
  return (
    <div
      to=""
      className="flex border border-gray-200 shadow py-6 hover:bg-gray-50 transition"
    >
      <div className="w-1/2 font-medium pl-2">{props.name}</div>
      <div className="w-1/2 font-medium pl-2">${props.hourly_rate}</div>
      <div className="flex justify-between w-1/2 font-medium pl-2 pr-4">
        {authUserjoined ? (
          <div className="w-1/2 font-medium pl-2">
            <FontAwesomeIcon
              className="text-green-400"
              icon={solid("check")}
              size="1x"
            />
          </div>
        ) : (
          <div className="w-1/2 font-medium pl-2"> - </div>
        )}
        <div className="flex flex-col space-y-2  md:flex-row md:space-x-2 md:space-y-0 transition text-sm">
          {authUserjoined ? (
            <div className="grid gap-1 md:grid-cols-2 md:gap-2 ">
              <Link
                to={`/${props.name}`}
                className="px-4 bg-blue-700 rounded hover:bg-blue-800 text-white"
              >
                Shifts
              </Link>
              <button
                onClick={() => leaveOrganization()}
                className="px-4 bg-red-500 rounded hover:bg-red-600 text-white"
              >
                Leave
              </button>
              <button
                onClick={() => {
                  props.setSelectedOrganization(props);
                  props.setIsEditOrganizationModalOpen(true);
                }}
                className="px-4 bg-green-600 rounded hover:bg-green-700 text-white"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="grid gap-1 md:grid-cols-2 md:gap-2 ">
              <Link
                to={`/${props.name}`}
                className="px-4 bg-blue-700 rounded hover:bg-blue-800 text-white"
              >
                Shifts
              </Link>
              <button className="px-4 bg-purple-500 rounded text-white">
                Join
              </button>
              <button
                onClick={() => {
                  props.setSelectedOrganization(props);
                  props.setIsEditOrganizationModalOpen(true);
                }}
                className="px-4 bg-green-600 rounded hover:bg-green-700 text-white"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default OrganizationCard;
