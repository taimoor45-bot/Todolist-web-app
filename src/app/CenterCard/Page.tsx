import React from "react";
import TaskButton from "../../../component/Task";

const CenterCard = () => {
  return (
    <>
      <div className="w-[466px] h-[719px]">
        <div className="flex justify-between">
          <div className="">
            <TaskButton
              text="To-Do"
              image="/Pending.png"
              alt="Pending"
              className=" border-none bg-transparent text-[var(--Red)] hover:bg-transparent"
            />
          </div>
          <div className="">
            <TaskButton
              text="To-Do"
              image="/Plus.png"
              alt="Plus"
              className="border-none bg-transparent text-[var(--Red)] hover:bg-transparent"
            />
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default CenterCard;
