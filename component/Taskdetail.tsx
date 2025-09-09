import React from "react";
import Image from "next/image";
const Taskdetail = (props: {
  image: string;
  title: string;
  policy: string;
  status: string;
}) => {
  return (
    <>
      <div className="flex gap-3 m-4">
        <div className="">
          <Image
            src={props.image}
            width={180}
            height={180}
            alt={props.image}
            className="rounded-sm"
          />
        </div>
        <div className="mt-20">
          <h1 className="font-semibold text-[16px]">{props.title}</h1>
          <p className="">
            Priority: <span className="text-red-500">{props.policy}</span>{" "}
          </p>
          <p>
            {" "}
            Status: <span className="text-red-500">{props.status}</span>
          </p>
          <p className="">
            Created on:{" "}
            <span className="text-[var(--neutral-gray)]"> 20/06/2023</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Taskdetail;
