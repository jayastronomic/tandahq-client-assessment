import React, { useState } from "react";
import ProfileInformation from "../components/ProfileInformatiom";
import Organizations from "../components/Organizations";
import AddOrganizationModal from "../components/AddOrganizationModal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen  bg-gray-100 p-6">
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 flex-1">
        <div className="flex space-x-10 md:flex-col md:space-x-0">
          <ProfileInformation />
          <button
            className="bg-blue-500 shadow rounded self-center text-white font-medium px-2 py-1 hover:bg-blue-600 transition md:self-auto md:mt-2"
            onClick={() => setIsOpen(true)}
          >
            + Add Organization
          </button>
        </div>
        <Organizations />
      </div>
      {isOpen && <AddOrganizationModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
