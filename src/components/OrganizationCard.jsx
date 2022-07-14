import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Notice from "../components/Notice";

const API = "http://localhost:3001/leave_organization";

const OrganizationCard = (props) => {
  const [authUserjoined, setAuthUserJoined] = useState(props.auth_user_joined);
  const [isNoticOpen, setIsNoticeOpen] = useState(false);

  const leaveOrganization = () => {
    const updatedUser = {
      organization_id: props.id,
    };
    const payload = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
      credentials: "include",
    };
    fetch(API + `/${props.authUser.id}`, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        setAuthUserJoined(resObj.organization.auth_user_joined);
      })
      .catch((err) => console.log(err));

    setIsNoticeOpen(false);
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
                state={{ organizationId: props.id }}
                to={`/${props.name}`}
                className="px-4 bg-blue-700 rounded hover:bg-blue-800 text-white"
              >
                Shifts
              </Link>
              <button
                onClick={() => setIsNoticeOpen(true)}
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
                state={{ organizationId: props.id }}
                to={`/${props.name}`}
                className="px-4 bg-blue-700 rounded hover:bg-blue-800 text-white"
              >
                Shifts
              </Link>
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
      {isNoticOpen && (
        <Notice
          setIsNoticeOpen={setIsNoticeOpen}
          leaveOrganization={leaveOrganization}
          authUser={props.authUser}
          organization={props}
        />
      )}
    </div>
  );
};

export default OrganizationCard;
