import React from "react";
import Image from "next/image";
import Taskdetail from "./Taskdetail";
import CustomButton from "./CustomButton";
import { Button } from "@/components/ui/button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import TaskButton from "./Task";
import VitalButton from "./VitalButton";
const SubmitDocument = (props: {
  listclass?: string;
  TaskTitle?: string;
  objective?: string;
  TaskDescription?: string;
  AdditionalNotes?: string;
  Deadline?: string;
  FirstList?: string;
  secondtList?: string;
  thirdList?: string;
}) => {
  return (
    <>
      <div className=" w-[450px] h-[837px] rounded-[16px] border border-[#A1A3AB] border-opacity-[0.63] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] m-5">
        <Taskdetail
          image="/SubmitDocument.png"
          title="Submit Documents"
          policy="Extreme"
          status="Not Started"
        />
        <div className="text-[var(--neutral-gray)] m-4">
          <div className="">
            <p className="my-2">
              {" "}
              <b>TaskTitle</b>:{props.TaskTitle}
            </p>
            <p className="my-2">
              {" "}
              <b>objective</b>:{props.objective}
            </p>
            <p className="my-2">
              {" "}
              <b>TaskDescription</b>:{props.TaskDescription}
            </p>
            <ol className={props.listclass}>
              <li>{props.FirstList}</li>
              <li>{props.secondtList}</li>
              <li>{props.thirdList}</li>
            </ol>
            <p className="my-2">
              {" "}
              <b>Deadline:</b>
              {props.Deadline}
            </p>
          </div>
        </div>
        <div className="m-2 ">
          <VitalButton />
        </div>
      </div>
    </>
  );
};

export default SubmitDocument;
