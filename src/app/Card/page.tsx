import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardDemo from "../../../component/CardDeom";
import TaskButton from "../../../component/Task";
const Example = () => {
  return (
    <>
      <div className="w-[506px] h-[719px] rounded-[14px] bg-[var(--WhiteCard)] shadow-[0_5px_11px_rgba(0,0,0,0.04),0_19px_19px_rgba(0,0,0,0.03)]">
        <div className=" mx-3">
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
                className="border-none bg-transparent text-[var(--neutral-gray)] hover:bg-transparent"
              />
            </div>
          </div>
          <div className="">
            <CardDemo
              title="Attend Nischal’s Birthday Party"
              text="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)....."
              Priority="Moderate"
              Status="Not Started"
              image="/BirthDay.png"
              Rightimage="/Redright.png"
            />
            <CardDemo
              title="Attend Nischal’s Birthday Party"
              text="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)....."
              Priority="Moderate"
              Status="Not Started"
              image="/BirthDay.png"
              Rightimage="/BlueSearchicon.png"
            />

            <CardDemo
              title="Presentation on Final Product "
              text="Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for..."
              Priority="Moderate"
              Status="In Progress"
              image="/Presentation.png"
              Rightimage="/BlueSearchicon.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
