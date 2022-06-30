import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfileInformation = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded border border-gray-200 shadow-md ">
      <FontAwesomeIcon
        className="text-gray-500"
        icon={solid("user")}
        size="2x"
      />
      <div className="flex flex-col">
        <p className="text-2xl font-semibold text-gray-500 font-mono">
          Julian Smith
        </p>
        <p className="text-sm text-gray-600">juliansmith94@hotmail.com</p>
      </div>
    </div>
  );
};

export default ProfileInformation;
