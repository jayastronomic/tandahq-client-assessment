import React, { useState, useEffect } from "react";

const API = "http://localhost:3001/organizations";
const EditOrganizationForm = (props) => {
  const [name, setName] = useState(props.selectedOrganization.name);
  const [hourlyRate, setHourlyRate] = useState(
    props.selectedOrganization.hourly_rate
  );

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "hourlyRate") {
      setHourlyRate(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrganization = {
      organization: {
        name: name,
        hourly_rate: hourlyRate,
      },
    };

    const payload = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedOrganization),
      credentials: "include",
    };

    fetch(API + `/${props.selectedOrganization.id}`, payload)
      .then((resp) => resp.json())
      .then((resObj) => props.addUpdatedOrganization(resObj))
      .catch((err) => console.log(err));

    props.setIsEditOrganizationModalOpen(false);
  };

  return (
    <form
      className="z-10 flex flex-col bg-white rounded p-10 md:w-1/2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-medium text-gray-700">Edit Organization</h1>

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
        <button
          type="submit"
          className="text-white font-medium bg-blue-500 rounded hover:bg-blue-600 transition py-2 md:self-end md:px-10"
        >
          Update Organization
        </button>
      </div>
    </form>
  );
};

export default EditOrganizationForm;
