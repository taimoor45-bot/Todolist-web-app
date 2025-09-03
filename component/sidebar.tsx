"use client";
import { useState } from "react";
import { Calendar, Inbox, LogOut, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

// Menu items
const items = [
  {
    id: 1,
    title: "Dashboard",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
  {
    id: 2,
    title: "Vital Task",
    url: "#",
    img1: "/RedExma.png", // inactive
    img2: "/Exam.png",
    type: "image",
  },
  {
    id: 3,
    title: "My Task",
    url: "#",
    img1: "/Redtask.png", // inactive
    img2: "/my task.png",
    type: "image",
  },
  {
    id: 4,
    title: "Task Categories",
    url: "#",
    img1: "/Redsidebar.png", // inactive
    img2: "/Sidebar.png", // active
    type: "image",
  },
  {
    id: 5,
    title: "Settings",
    url: "#",
    img1: "/Redsetting.png", // inactive
    img2: "/Setting.png", // active
    type: "image",
  },
  {
    id: 6,
    title: "Help",
    url: "#",
    img1: "/RedQuestion.png", // inactive
    img2: "/Questions.png", // active
    type: "image",
  },
  {
    id: 7,
    title: "Exit",
    url: "#",
    img1: "/sign-out.png", // inactive
    img2: "/Exit.png", // active
    type: "image",
  },
];

export default function CustomSidebar() {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="mt-25">
        <div className="bg-[#ff6767] h-screen w-[365px] relative  pb-5 rounded-tr-xl rounded-br-lg shadow-sm flex flex-col ">
          {/* Profile */}
          <div className="mx-auto mt-10">
            <h1 className="font-semibold text-[16px] text-white">
              Sundar Gurung
            </h1>
            <p className="text-[12px] text-white">sundargurung360@gmail.com</p>
          </div>

          {/* Menu */}
          <nav className="my-3 flex-1 mx-5">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`flex items-center gap-4 p-4 w-[288px] h-[49px] rounded-lg transition ${
                  active === item.title
                    ? "bg-white text-[#ff6767]"
                    : "text-white hover:bg-white/10"
                } ${item.id === 7 ? "mt-35" : "mt-2"}`}
                onClick={() => setActive(item.title)}
              >
                <Image
                  src={active === item.title ? item.img1 : item.img2}
                  alt={item.title}
                  width={item.id === 2 ? "8" : "20"}
                  height={item.id === 2 ? "8" : "20"}
                />
                <span className="text-[16px] font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className=" absolute top-25 left-32">
          {" "}
          <Image src="/Profile.png" alt="" width={80} height={32} />{" "}
        </div>
      </div>
    </>
  );
}
