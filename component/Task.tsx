import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TaskButton = (props: {
  image: string;
  text: string;
  alt: string;
  className: string;
}) => {
  return (
    <>
      <div className="">
        <Button className={props.className}>
          <Image src={props.image} alt={props.alt} width={20} height={20} />
          <span>{props.text}</span>
        </Button>
      </div>
    </>
  );
};

export default TaskButton;
