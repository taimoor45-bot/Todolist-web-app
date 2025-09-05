import React from "react";
import TaskCard from "../../../component/TaskCard";
import TaskButton from "../../../component/Task";
import Custombutton from "../../../component/custombutton";

const CompleteTask = () => {
  return (
    <>
      <div className="bg-[var(--WhiteCard)] w-[423px] h-[423px] rounded-[14px] px-5 mt-10">
        <TaskButton
          text="Completed Task"
          image="/TaskComplete.png"
          alt="Pending"
          className=" border-none bg-transparent text-[#F24E1E] hover:bg-transparent "
        />
        <TaskCard
          title="Walk the dog"
          text="Take the dog to the park and bring treats as well."
          Status="Completed"
          image="/Dog.png"
          Rightimage="/Redright.png"
        />
        <TaskCard
          title="Attend Nischal’s Birthday Party"
          text="Meet with the client and finalize requirements."
          Status="Completed"
          image="/BirthDay.png"
          Rightimage="/Redright.png"
        />
      </div>
    </>
  );
};

export default CompleteTask;
