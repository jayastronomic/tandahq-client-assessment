import React from "react";
import { Link } from "react-router-dom";

const OrganizationCard = (props) => {
  return (
    <Link
      to=""
      className="flex border border-gray-200 shadow py-6 hover:bg-blue-100 transition transform hover:scale-[1.01]"
    >
      <div className="w-1/2 font-medium pl-2">McDonald's</div>
      <div className="w-1/2 font-medium pl-2">$9.30</div>
    </Link>
  );
};

export default OrganizationCard;
