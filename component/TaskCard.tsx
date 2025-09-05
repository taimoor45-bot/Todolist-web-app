import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
const TaskCard = (props: {
  title: string;
  text: string;
  image: string;

  Status: string;
  Rightimage: string;
  createdOn?: string; // Added optional createdOn prop
}) => {
  return (
    <>
      <Card className="w-full max-w-[372px] rounded-2xl mt-3 border border-[#A1A3AB20] bg-[var(--Card)] p-3">
        <div className="flex justify-between">
          <Image
            src={props.Rightimage}
            alt="icon"
            width={18}
            height={18}
            className="m-1"
          />
          <MoreHorizontal className="text-[var(--Red)]" />
        </div>

        <CardHeader>
          <div className="flex justify-between">
            <div className="flex-1 pr-3">
              <h1 className="font-semibold text-base">{props.title}</h1>
              <p className="text-sm text-[#747474]">{props.text}</p>
              <p className="text-sm">
                Status: <span className="text-[#F21E1E]">{props.Status}</span>
              </p>
              <span className="text-xs text-[#555]">Completed 2 days ago.</span>
            </div>
            <div className="w-[30%]">
              <Image
                src={props.image}
                alt={props.title}
                width={130}
                height={140}
              />
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default TaskCard;
