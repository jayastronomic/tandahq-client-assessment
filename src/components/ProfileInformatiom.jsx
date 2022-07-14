import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Spinner from "./Spinner";

const API = "http://localhost:3001/logout";
const ProfileInformation = (props) => {
  const navigate = useNavigate();

  console.log(props);
  const logout = () => {
    fetch(API, { method: "DELETE", credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        console.log(resObj);
        props.handleLogout();
      })
      .catch((err) => console.log(err));

    navigate("/login");
  };
  return (
    <div className="flex space-x-4 md:flex-col md:space-x-0">
      <div className="flex flex-col border shadow-md min-w-[15rem] p-4 items-center bg-white rounded">
        {props.isLoading ? (
          <Spinner />
        ) : (
          <>
            <FontAwesomeIcon
              className="text-gray-500"
              icon={solid("user")}
              size="2x"
            />
            <div className="flex flex-col text-center">
              <p className="text-2xl font-semibold text-gray-500 font-mono">
                {props.name}
              </p>
              <p className="text-sm text-gray-600">{props.email_address}</p>
              <button
                onClick={() => logout()}
                className="bg-gray-500 text-white font-medium hover:bg-gray-600 transition text-xs py-0.5 px-4 rounded"
              >
                Log off
              </button>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col border shadow-md min-w-[15rem] p-4 items-center bg-white rounded mt-2">
        <p className="font-semibold ">Your Organization</p>
        {props.organization ? (
          <p className="font-thin">{props.organization.name}</p>
        ) : (
          <p className="text-sm font-thin">You have no organization</p>
        )}
      </div>
      <button
        className="bg-blue-500 shadow rounded self-center text-white font-medium px-2 py-1 hover:bg-blue-600 transition md:self-auto md:mt-2 text-sm"
        onClick={() => props.setIsOpen(true)}
      >
        + Add Organization
      </button>
    </div>
  );
};

export default ProfileInformation;
