import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function CardDemo(props: {
  title: string;
  text: string;
  image: string;
  Priority: string;
  Status: string;
  Rightimage: string;
  createdOn?: string; // Added optional createdOn prop
}) {
  return (
    <Card className="w-[472px] rounded-[50px] h-50 my-3 border-[#A1A3AB00] border-2 bg-[var(--Card)] p-3 ">
      <div className=" flex justify-between">
        <div className="">
          <Image
            src={props.Rightimage}
            alt="Error"
            width={18}
            height={18}
            className="m-1"
          />
        </div>
        <div>
          <MoreHorizontal style={{ color: "var(--Red)" }} />
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between">
          <div className=" w-[70%]">
            <h1 className="font-semibold text-[16px]">{props.title}</h1>
            <p className="font-normal text-[14px] text-[#747474] ">
              {props.text}
            </p>
          </div>
          <div className="w-[20%]">
            <Image
              src={props.image}
              alt="Error"
              width={130}
              height={140}
              className=""
            />
          </div>
        </div>
      </CardHeader>

      <CardFooter>
        <div className="flex justify-between w-full text-[12px]">
          <span className="font-normal text-black">
            Priority: <span className="text-[#42ADE2]">{props.Priority}</span>
          </span>
          <span className="font-normal">
            Status: <span className="text-[#F21E1E]">{props.Status}</span>
          </span>
          <span className="font-normal">
            Created on: {props.createdOn || "20/06/2023"}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
