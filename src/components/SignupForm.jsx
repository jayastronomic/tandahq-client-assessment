import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:3001/users";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const clearForm = () => {
    setName("");
    setEmailAddress("");
    setPassword("");
    setPasswordConfirmation("");
  };
  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "emailAddress") setEmailAddress(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "passwordConfirmation")
      setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        name: name,
        email_address: emailAddress,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => props.handleLogin(resObj))
      .catch((err) => console.log(err));

    clearForm();
    navigate("/");
  };

  return (
    <form
      className="flex flex-col w-[29rem] bg-white p-10 rounded"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-8">
        <h1 className="self-center text-2xl font-semibold">Sign up</h1>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-200 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Name"
            value={name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-200 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Email address"
            value={emailAddress}
            name="emailAddress"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-00 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Password"
            value={password}
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Password Confirmation
          </label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-00 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            name="passwordConfirmation"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-green-600 py-4 text-white text-lg font-medium rounded"
          type="submit"
        >
          Sign up
        </button>
        <div className="flex flex-col text-xs space-y-2" to="/signup">
          <div>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Log in
            </Link>
          </div>
          <p>Forgot your password?</p>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
