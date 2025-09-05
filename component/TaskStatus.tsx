"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import CircleProgress from "./CircleProgress";
import TaskButton from "./Task";

export default function TaskStatus() {
  return (
    <Card className="w-full max-w-lg  mx-auto bg-[var(--WhiteCard)] border-[var(--WhiteCard)] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.04),0px_13px_13px_0px_rgba(0,0,0,0.03)]">
      <CardHeader>
        <CardTitle className="text-red-400">
          <TaskButton
            text="Task Status"
            image="/TaskComplete.png"
            className="bg-transparent hover:bg-transparent text-[var(--Red)] "
            alt="Task Status"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around">
        <div className="flex flex-col items-center">
          <CircleProgress value={84} color="#22c55e" />
          <span className="text-green-600 mt-2">Completed</span>
        </div>
        <div className="flex flex-col items-center">
          <CircleProgress value={46} color="#2563eb" />
          <span className="text-blue-600 mt-2">In Progress</span>
        </div>
        <div className="flex flex-col items-center">
          <CircleProgress value={13} color="#ef4444" />
          <span className="text-red-600 mt-2">Not Started</span>
        </div>
      </CardContent>
    </Card>
  );
}
