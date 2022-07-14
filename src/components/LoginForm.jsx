import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:3001/login";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "emailAddress") setEmailAddress(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      user: {
        email_address: emailAddress,
        password: password,
      },
    };
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      crendentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        console.log(resObj);
        props.handleLogin(resObj);
      })
      .catch((err) => console.log(err));

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[29rem] bg-white p-10 rounded"
    >
      <div className="flex flex-col space-y-8">
        <h1 className="self-center text-2xl font-semibold">Log in</h1>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-200 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Email address"
            type="text"
            value={emailAddress}
            onChange={handleChange}
            name="emailAddress"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-00 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button
          className="bg-green-600 py-4 text-white text-lg font-medium rounded"
          type="submit"
        >
          Log In
        </button>
        <div className="flex flex-col text-xs space-y-2" to="/signup">
          <div>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400">
              Sign up
            </Link>
          </div>
          <p>Forgot your password?</p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
