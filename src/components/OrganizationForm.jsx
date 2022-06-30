import React, { useState } from "react";

const OrganizationForm = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <form className="z-10 flex flex-col bg-white rounded p-10 md:w-1/2">
      <h1 className="text-2xl font-medium text-gray-700">New Organization</h1>
      {!hidden && (
        <div className="pt-6 space-y-10 pb-8">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Name of organization
            </label>
            <input
              className="px-2 py-2 border border-gray-400 rounded"
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Hourly Rate: $0.00
            </label>
            <input
              className="px-2 py-2 border border-gray-400 rounded"
              type="number"
              step="0.01"
              min={0}
              placeholder="Hourly Rate"
            />
          </div>
        </div>
      )}
      {hidden ? (
        <div className="flex flex-col space-y-2">
          <div className="text-lg py-4">Do yo want to join Organization?</div>
          <button className="text-white font-medium bg-green-500 rounded hover:bg-green-600 transition py-2 md:self-end md:px-10">
            Yes
          </button>
          <button className="text-white font-medium bg-red-400 rounded hover:bg-red-500 transition py-2 md:self-end md:px-10">
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
