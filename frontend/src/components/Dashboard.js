import React from "react";
import GoalList from "./GoalList";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          {/* WELCOME USER */}
          <h1 className="font-bold text-4xl text-slate-700 mt-12">
            Welcome Lorem
          </h1>
          <p className="mt-4 text-4xl font-semibold text-slate-500">
            Goals Dashboard
          </p>

          {/* INPUT GOAL */}
          <div className="w-5/6 mt-12">
            <label
              for="name"
              className="leading-7 text-xl text-slate-800 font-semibold"
            >
              Goal
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Add your goal"
              className="w-full bg-gray-100 rounded border border-slate-300 focus:border-slate-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            {/* BUTTON LOGIN */}
            <button className="font-semibold mt-4 w-full text-white bg-slate-700 py-3 rounded-lg hover:opacity-90 text-xl transition duration-300 ease-in-out ">
              Add Goal
            </button>
          </div>

          {/* LIST OF GOAL IF EXIST */}
          <div className=" flex flex-col w-5/6 lg:grid lg:grid-rows-3 lg:grid-flow-col gap-4 mt-8 mb-32 ">
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
            <GoalList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
