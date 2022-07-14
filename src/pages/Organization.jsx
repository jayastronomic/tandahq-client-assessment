import React, { useEffect, useState } from "react";
import ShiftContainer from "../containers/ShiftsContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import AddShiftModal from "../components/AddShiftModal";
import Notice from "../components/Notice";

const API = "http://localhost:3001/organizations";
const API2 = "http://localhost:3001/join_organization";

const Organization = (props) => {
  console.log(props);
  const location = useLocation();
  const [organization, setOrganization] = useState({});
  const [shifts, setShifts] = useState([]);
  const [isAddShiftModalOpen, setIsAddShiftModalOpen] = useState(false);
  const [authUserJoined, setAuthUserJoined] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  useEffect(() => {
    fetch(API + `/${location.state.organizationId}`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        setOrganization(resObj);
        setShifts(resObj.shifts);
        setAuthUserJoined(resObj.auth_user_joined);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const joinOrganization = () => {
    if (props.authUser.organization !== null) {
      setIsNoticeOpen(true);
      return;
    }
    const updatedUser = {
      id: organization.id,
      user_id: props.authUser.id,
    };

    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
      credentials: "include",
    };

    fetch(API2 + `/${organization.id}`, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.auth_user_joined) {
          setAuthUserJoined(resObj.auth_user_joined);
        }
      })
      .catch((err) => console.log(err));
  };

  const addShift = (newShift) => {
    setShifts([newShift, ...shifts]);
  };

  return (
    <div className="flex flex-col bg-white shadow h-full flex-1 p-4 overflow-auto">
      <div className="flex items-center w-full px-8 justify-between">
        <FontAwesomeIcon
          className="cursor-pointer text-gray-500"
          onClick={() => navigate(-1)}
          icon={solid("arrow-left")}
          size="2x"
        />
        <h1 className="text-2xl font-medium text-gray-700 py-2">
          {organization.name}
        </h1>
        {authUserJoined ? (
          <button
            onClick={() => setIsAddShiftModalOpen(true)}
            className="rounded border-b bg-blue-500 text-sm text-white font-semibold p-4"
          >
            + Add Shift
          </button>
        ) : (
          <button
            onClick={() => joinOrganization()}
            className="rounded border-b bg-purple-500 hover:bg-purple-600 text-sm text-white font-semibold px-8 py-2"
          >
            Join Organization
          </button>
        )}
      </div>
      <p className="flex justify-center text-gray-600 font-bold">
        Hourly Rate: ${organization.hourly_rate}
      </p>
      <h2 className="text-xl font-light self-center">Shifts</h2>
      <ShiftContainer shifts={shifts} />
      {isAddShiftModalOpen && (
        <AddShiftModal
          setIsAddShiftModalOpen={setIsAddShiftModalOpen}
          authUser={props.authUser}
          addShift={addShift}
        />
      )}
      {isNoticeOpen && (
        <Notice
          setIsNoticeOpen={setIsNoticeOpen}
          authUser={props.authUser}
          organization={organization}
        />
      )}
    </div>
  );
};

export default Organization;
