import React from "react";
import LoginForm from "../components/LoginForm";
import logo from "../images/tanda.png";

const Login = (props) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#57bde4] justify-center items-center">
      <img alt="Logo" src={logo} />
      <LoginForm handleLogin={props.handleLogin} />
    </div>
  );
};

export default Login;
