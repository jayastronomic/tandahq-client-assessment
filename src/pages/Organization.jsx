import React, { useEffect, useState } from "react";
import ShiftContainer from "../containers/ShiftsContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const API = "http://localhost:3001/organizations";

const shifts = [1];
const Organization = (props) => {
  const location = useLocation();
  const [organization, setOrganization] = useState({});
  useEffect(() => {
    fetch(API + `${location.pathname}`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        console.log(resObj);
        setOrganization(resObj);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white shadow h-screen flex-1">
      <div className="flex items-center w-full px-8 border-2">
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          icon={solid("arrow-left")}
          size="2x"
        />
        <h1 className="text-2xl font-medium text-gray-700 py-2 m-auto">
          {organization.name}
        </h1>
      </div>

      <h2 className="text-xl font-light self-center">Shifts</h2>
      <ShiftContainer shifts={shifts} />
    </div>
  );
};

export default Organization;
