"use client";
import React, { useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Dashboard from "../../../component/Dashboard";
import VitalTask from "../../../component/VitalTask";
import MyTask from "../../../component/MyTask";
import TaskCategories from "../../../component/TaskCategories";
import Settings from "../../../component/Settings";

const MainLayout = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div className="mt-10 flex-3">
        <Sidebar active={active} setActive={setActive} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {active === "Dashboard" && <Dashboard />}
        {active === "Vital Task" && <VitalTask />}
        {active === "My Task" && <MyTask />}
        {active === "Task Categories" && <TaskCategories />}
        {active === "Settings" && <Settings />}
      </div>
    </div>
  );
};

export default MainLayout;
