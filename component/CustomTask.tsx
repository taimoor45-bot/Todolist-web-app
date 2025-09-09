import React from "react";
import SubmitCard from "./SubmitCard";

const CustomTask = () => {
  return (
    <>
      <div className=" w-[450px] h-[837px] rounded-[16px] border border-[#A1A3AB] border-opacity-[0.63] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] m-5">
        <h1 className="m-5 font-semibold text-lg">My Tasks</h1>
        <SubmitCard
          title="Submit Documents"
          text="Make sure to submit all the necessary docum....."
          Priority="Extreme"
          Status="Not Started"
          image="/BirthDay.png"
          Rightimage="/Redright.png"
          className="w-[402px] h-[220px] rounded-[50px] m-5 border border-[var(--neutral-gray)]  p-5 shadow-sm"
        />
        <SubmitCard
          title="Complete assignments"
          text="Make sure to submit all the necessary docum....."
          Priority="Extreme"
          Status="Not Started"
          image="/BirthDay.png"
          Rightimage="/BlueSearchicon.png"
          className="w-[402px] h-[220px] rounded-[50px] m-5 border  border-[var(--neutral-gray)] p-5 shadow-sm"
        />
      </div>
    </>
  );
};

export default CustomTask;
