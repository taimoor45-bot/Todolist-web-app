"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // ✅ import router
import Image from "next/image";
import Link from "next/link";

// Menu items
const items = [
  {
    id: 1,
    title: "Dashboard",
    img1: "/Dashboard.png",
    img2: "/WhiteDashboard.png",
  },
  {
    id: 2,
    title: "Vital Task",
    img1: "/RedExma.png",
    img2: "/Exam.png",
  },
  {
    id: 3,
    title: "My Task",
    img1: "/Redtask.png",
    img2: "/my task.png",
  },
  {
    id: 4,
    title: "Task Categories",
    img1: "/Redsidebar.png",
    img2: "/Sidebar.png",
  },
  {
    id: 5,
    title: "Settings",
    img1: "/Redsetting.png",
    img2: "/Setting.png",
  },
  {
    id: 6,
    title: "Help",
    img1: "/RedQuestion.png",
    img2: "/Questions.png",
  },
  {
    id: 7,
    title: "Exit",
    img1: "/sign-out.png",
    img2: "/Exit.png",
  },
];

interface CustomSidebarProps {
  active: string;
  setActive: (title: string) => void;
}

export default function CustomSidebar({
  active,
  setActive,
}: CustomSidebarProps) {
  return (
    <div className="mt-35">
      <div className="bg-[#ff6767] h-[868px]  w-[325px] relative pb-5 rounded-tr-xl rounded-br-lg shadow-sm flex flex-col">
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
            <button
              key={item.id}
              onClick={() => {
                setActive(item.title);
              }}
              className={`flex items-center gap-4 p-4 w-[288px] h-[49px] rounded-lg transition ${
                active === item.title
                  ? "bg-white text-[#ff6767]"
                  : "text-white hover:bg-white/10"
              } ${item.id === 7 ? "mt-65" : "mt-2"}`}
            >
              <Image
                src={active === item.title ? item.img1 : item.img2}
                alt={item.title}
                width={item.id === 2 ? 8 : 20}
                height={item.id === 2 ? 8 : 20}
              />
              <span className="text-[16px] font-medium">{item.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Profile Image floating */}
      <div className="absolute top-32 left-25">
        <Image src="/Profile.png" alt="" width={80} height={32} />
      </div>
    </div>
  );
}
