import { Button } from "@/components/ui/button";
import React from "react";

const Custombutton = (props: { text: string; className: string }) => {
  return (
    <>
      <Button className={props.className}>{props.text}</Button>
    </>
  );
};

export default Custombutton;
