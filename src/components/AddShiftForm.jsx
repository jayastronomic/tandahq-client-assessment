import React, { Component } from "react";

const API = "http://localhost:3001/shifts";

class AddShiftForm extends Component {
  constructor() {
    super();
    this.state = {
      shiftDate: "",
      startTime: "",
      finishTime: "",
      breakLength: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newShift = {
      shift_date: this.state.shiftDate,
      start: this.state.startTime,
      finish: this.state.finishTime,
      break_length: this.state.breakLength,
      user_id: this.props.authUser.id,
    };

    const payload = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newShift),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => this.props.addShift(resObj))
      .catch((err) => console.log(err));

    this.props.setIsAddShiftModalOpen(false);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form
        className="z-10 flex flex-col bg-white rounded p-10 md:w-1/2"
        onSubmit={this.handleSubmit}
      >
        <h1 className="text-2xl font-medium text-gray-700">Add Shift</h1>

        <div className="pt-6 space-y-10 pb-8">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Shift Date: mm/dd/yyyy
            </label>
            <input
              required
              type="date"
              className="px-2 py-2 border border-gray-400 rounded focus:outline-none focus:bg-blue-50 focus:ring-4 ring-blue-200 focus:border-blue-700"
              name="shiftDate"
              onChange={this.handleChange}
              value={this.state.shiftDate}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Start Time
            </label>
            <input
              required
              type="time"
              className="px-2 py-2 border border-gray-400 rounded focus:outline-none focus:bg-blue-50 focus:ring-4 ring-blue-200 focus:border-blue-700"
              placeholder="Start Time"
              name="startTime"
              onChange={this.handleChange}
              value={this.state.startTime}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Finish Time
            </label>
            <input
              required
              className="px-2 py-2 border border-gray-400 rounded focus:outline-none focus:bg-blue-50 focus:ring-4 ring-blue-100 focus:border-blue-700"
              type="time"
              placeholder="Finish Time"
              name="finishTime"
              onChange={this.handleChange}
              value={this.state.finishTime}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Break Length: mins
            </label>
            <input
              required
              className="px-2 py-2 border border-gray-400 rounded focus:outline-none focus:bg-blue-50 focus:ring-4 ring-blue-100 focus:border-blue-700"
              type="number"
              min={0}
              max={60}
              name="breakLength"
              value={this.state.breakLength}
              onChange={this.handleChange}
            />
          </div>

          <button
            type="submit"
            className="text-white font-medium bg-blue-500 rounded hover:bg-blue-600 transition py-2 md:self-end md:px-10"
          >
            Add Shift
          </button>
        </div>
      </form>
    );
  }
}

export default AddShiftForm;
