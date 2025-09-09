import React from "react";
import SubmitCard from "./SubmitCard";

const Customvital = () => {
  return (
    <>
      <div className="">
        <div className=" w-[450px] h-[837px] rounded-[16px] border border-[#A1A3AB] border-opacity-[0.63] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] m-5">
          <h1 className="m-5 font-semibold text-lg">My Tasks</h1>
          <SubmitCard
            title="Walk the dog"
            text="Take the dog to the park and bring treats as well....."
            Priority="Extreme"
            Status="Not Started"
            image="/Dog.png"
            Rightimage="/Redright.png"
            className="w-[402px] h-[220px] rounded-[50px] m-5 border border-[var(--neutral-gray)]  p-5 shadow-sm"
          />
          <SubmitCard
            title="Take grandma to hospital"
            text="Go back home and take grandma to the hosp....."
            Priority="Moderate"
            Status="In Progress"
            image="/Doctor.png"
            Rightimage="/BlueSearchicon.png"
            className="w-[402px] h-[220px] rounded-[50px] m-5 border  border-[var(--neutral-gray)] p-5 shadow-sm"
          />
        </div>
      </div>
    </>
  );
};

export default Customvital;
