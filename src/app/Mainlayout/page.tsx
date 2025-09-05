import React from "react";
import Sidebar from "../sidebar/page";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserPlus, UserPlus2, UserPlus2Icon } from "lucide-react";
import TaskButton from "../../../component/Task";
import CenterCard from "../CenterCard/Page";
import Example from "../Card/page";
import TaskStatus from "../../../component/TaskStatus";
import CompleteTask from "../CompeleteTask/Page";
// Corrected import path

const mainLayout = () => {
  return (
    <>
      <div className="flex just w-full">
        <div className="mt-10 flex-3">
          <Sidebar />
        </div>
        <div className="flex-7 mt-40">
          <div className="flex justify-between">
            <div className=" flex gap-4">
              <h1 className="text-2xl font-bold">Welcome back, Sundar</h1>
              <Image
                src="/handwave.png"
                alt="hand wave"
                width={42}
                height={41}
              />
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
          <div className=" flex gap-8">
            <div>
              <Example />
            </div>
            <div className=" mx-5">
              <TaskStatus />
              <CompleteTask />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mainLayout;
