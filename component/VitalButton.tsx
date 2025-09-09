import { Button } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const VitalButton = () => {
  return (
    <>
      <div className="flex gap-3 justify-end">
        <div className="h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
          <Image src="/Calendar.png" alt="Calendar" width={20} height={20} />
        </div>
        <div className="h-[40px] w-[40px] rounded-[8px] bg-[var(--red-pink)] flex items-center justify-center">
          <Image src="/Bell.png" alt="Notifications" width={20} height={20} />
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default VitalButton;
