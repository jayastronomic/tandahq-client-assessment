import React from "react";
import SignupForm from "../components/SignupForm";
import logo from "../images/tanda.png";

const Signup = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-[#57bde4] justify-center items-center py-10">
      <img alt="Logo" src={logo} />
      <SignupForm />
    </div>
  );
};

export default Signup;
