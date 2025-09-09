import Example from "@/app/Card/page";
import React from "react";
import TaskStatus from "./TaskStatus";
import CompleteTask from "@/app/CompeleteTask/Page";
import TaskButton from "./Task";
import Image from "next/image";
const Dashboard = () => {
  return (
    <>
      <div className="flex-7 mt-35">
        <div className="flex justify-between">
          <div className=" flex gap-4">
            <h1 className="text-2xl font-bold">Welcome back, Sundar</h1>
            <Image src="/handwave.png" alt="hand wave" width={42} height={41} />
          </div>
          <div className="gap-2 mx-5">
            <TaskButton
              image="/Add.png"
              text="invite"
              alt="AddUser"
              className="flex bg-transparent text-[var(--red-pink)] border border-[var(--red-pink)] p-2 hover:bg-white"
            />
          </div>
        </div>
        <div className=" flex gap-8 border-[#A1A3ABA1] mt-5">
          <div>
            <Example />
          </div>
          <div className=" mx-5">
            <TaskStatus />
            <CompleteTask />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
