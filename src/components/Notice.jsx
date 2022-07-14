import React from "react";
import { useLocation } from "react-router-dom";

const Notice = (props) => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div className="flex fixed inset-0 justify-center items-center">
        <button
          className="fixed h-full w-full bg-black bg-opacity-60"
          onClick={() => props.setIsNoticeOpen(false)}
        ></button>
        <div className="z-10 flex flex-col items-center bg-white rounded p-10">
          <p className="text-gray-600 text-lg pb-4">
            Are you sure you want to leave{" "}
            <span className="font-medium">
              {props.authUser.organization.name}?
            </span>
          </p>
          <p className="text-gray-600 text-sm pb-6">
            If you leave this organization, all of your shifts with{" "}
            <span className="font-medium text-blue-600">
              {props.authUser.organization.name}
            </span>{" "}
            will be permantely deleted. This action{" "}
            <span className="font-bold">cannot</span> be undone.
          </p>
          <div className="flex text-white font-medium text-sm space-x-6 ">
            <button
              onClick={() => props.leaveOrganization()}
              className="bg-red-600 p-2 rounded hover:bg-red-700"
            >
              Leave
            </button>
            <button
              onClick={() => props.setIsNoticeOpen(false)}
              className="bg-gray-700 p-2 rounded hover:bg-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex fixed inset-0 justify-center items-center">
        <button
          className="fixed h-full w-full bg-black bg-opacity-60"
          onClick={() => props.setIsNoticeOpen(false)}
        ></button>
        <div className="z-10 flex flex-col items-center bg-white rounded p-10">
          <p className="text-gray-600 text-lg">
            You already joined{" "}
            <span className="font-medium">
              {props.authUser.organization.name}!
            </span>
          </p>
          <p className="text-sm">
            You have to leave your current organization to join{" "}
            <span className="text-blue-600 font-medium">
              {props.organization.name}
            </span>
          </p>
        </div>
      </div>
    );
  }
};

export default Notice;
