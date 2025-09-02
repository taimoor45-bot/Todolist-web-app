import React from "react";
import { Calendar, Home, Inbox, Search, Settings, LogOut } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Custombutton from "./custombutton";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    className: "my-1 w-64 p-2 ",
  },
  {
    title: "Vital Task",
    url: "#",
    icon: Inbox,
    className: "my-1 w-64 p-2",
  },
  {
    title: "My Task",
    url: "#",
    icon: Calendar,
    className: "my-1 w-64 p-2",
  },
  {
    title: "Task Categories",
    url: "#",
    icon: Search,
    className: "my-1 w-64 p-2",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    className: "my-1 w-64 p-2",
  },
  {
    title: "Help",
    url: "#",
    icon: Settings,
    className: "my-1 w-64 p-2",
  },
  {
    title: "Exit",
    url: "#",
    icon: LogOut,
    className: "mt-22  w-64 p-2",
  },
];

const CustomSidebar = () => {
  return (
    <div className=" ">
      <div className="bg-[#ff6767] my-2 rounded-br-[8px] rounded-tr-[8px] w-[365px] h-[868px]">
        <div className=" ">
          <h1 className="font-semibold text-center text-[16px] mx-10 text-white">
            Sundar Gurung
          </h1>
          <p className="text-[16px] text-center font-normal text-white">
            sundargurung360@gmail.com
          </p>
        </div>

        <SidebarMenu className="align-center mx-15 ">
          {items.map((item) => (
            <div className=" text-white">
              <SidebarMenuItem key={item.title} className={item.className}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span className="mx-8  text-[16px] font-medium ">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
          ))}
        </SidebarMenu>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CustomSidebar;
