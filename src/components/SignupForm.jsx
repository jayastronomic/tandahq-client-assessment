import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <form className="flex flex-col w-[29rem] bg-white p-10 rounded">
      <div className="flex flex-col space-y-8">
        <h1 className="self-center text-2xl font-semibold">Sign up</h1>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-200 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-200 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Email address"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-00 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Password Confirmation
          </label>
          <input
            className="px-4 py-3 focus:outline-none focus:ring-4 ring-blue-00 focus:bg-blue-50 border border-gray-300 focus:border-blue-500"
            placeholder="Password Confirmation"
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
