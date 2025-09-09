import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

const SubmitCard = (props: {
  title: string;
  text: string;
  image: string;
  Priority: string;
  Status: string;
  Rightimage: string;
  className: string;
  createdOn?: string;
}) => {
  return (
    <>
      <Card className={props.className}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={props.Rightimage}
              alt={props.title}
              width={20}
              height={20}
            />
            <h1 className="font-semibold text-lg">{props.title}</h1>
          </div>
          <MoreHorizontal className="cursor-pointer" />
        </div>

        <div className="flex items-center gap-4 ">
          <p className="flex-grow font-normal text-[14px] text-[#747474]">
            {props.text}
          </p>
          <Image src={props.image} alt="Task" width={80} height={80} />
        </div>

        <div className="flex justify-between w-full text-[12px] text-gray-600">
          <span>
            Priority:{" "}
            <span className="text-[var(--Red)]">{props.Priority}</span>
          </span>
          <span>
            Status: <span className="text-[var(--Red)]">{props.Status}</span>
          </span>
          <span>Created on: 20/06/2023</span>
        </div>
      </Card>
    </>
  );
};

export default SubmitCard;
