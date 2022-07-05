import React, { useState, useEffect } from "react";

const API = "http://localhost:3001/organizations";
const OrganizationForm = (props) => {
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [buttonClicked, setButtonClicked] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "hourlyRate") {
      setHourlyRate(e.target.value);
    }
  };

  const createOrganization = () => {
    const newOrganization = {
      organization: {
        name: name,
        hourly_rate: hourlyRate,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrganization),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => props.addOrganization(resObj))
      .catch((err) => console.log(err));

    props.setIsOpen();
  };

  const createAndJoinOrganization = () => {
    const newOrganization = {
      organization: {
        name: name,
        hourly_rate: hourlyRate,
        user_id: props.authUser.id,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrganization),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => props.addOrganization(resObj))
      .catch((err) => console.log(err));

    props.setIsOpen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonClicked === "NO") {
      createOrganization();
    }
    if (buttonClicked === "YES") {
      createAndJoinOrganization();
    }
  };

  return (
    <form
      className="z-10 flex flex-col bg-white rounded p-10 md:w-1/2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-medium text-gray-700">New Organization</h1>
      {!hidden && (
        <div className="pt-6 space-y-10 pb-8">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Name of organization
            </label>
            <input
              className="px-2 py-2 border border-gray-400 rounded focus:outline-none focus:bg-blue-50 focus:ring-4 ring-blue-200 focus:border-blue-700"
              placeholder="Name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Hourly Rate: $0.00
            </label>
            <input
              className="px-2 py-2 border border-gray-400 rounded focus:outline-none focus:bg-blue-50 focus:ring-4 ring-blue-100 focus:border-blue-700"
              type="number"
              step="0.01"
              min={0}
              placeholder="Hourly Rate"
              value={hourlyRate}
              name="hourlyRate"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {hidden ? (
        <div className="flex flex-col space-y-2">
          <div className="text-lg py-4">
            Do yo want to join <span className="font-bold">{name}</span>?
          </div>
          <button
            className="text-white font-medium bg-green-500 rounded hover:bg-green-600 transition py-2 md:self-end md:px-10"
            type="submit"
            onClick={() => setButtonClicked("YES")}
          >
            Yes
          </button>
          <button
            className="text-white font-medium bg-red-400 rounded hover:bg-red-500 transition py-2 md:self-end md:px-10"
            type="submit"
            onClick={() => {
              setButtonClicked("NO");
            }}
          >
            No
          </button>
        </div>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault();
            setHidden(true);
          }}
          className="text-white font-medium bg-blue-500 rounded hover:bg-blue-600 transition py-2 md:self-end md:px-10"
        >
          Create Organization
        </button>
      )}
    </form>
  );
};

export default OrganizationForm;
