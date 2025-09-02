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
    title: "Dashboard",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
  {
    title: "Vital Task",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
  {
    title: "My Task",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
  {
    title: "Task Categories",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
  {
    title: "Settings",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
  {
    title: "Help",
    url: "#",
    img1: "/Dashboard.png", // inactive
    img2: "/WhiteDashboard.png", // active
    type: "image",
  },
];

export default function CustomSidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <Sidebar className="bg-none text-center mx-auto border-none shadow-none">
      <div className="bg-[#ff6767] h-[868px] w-[365px] m-auto rounded-br-lg rounded-tr-xl mt-20 shadow-sm flex flex-col relative">
        <SidebarContent>
          <SidebarGroup>
            {/* Profile Section */}
            <SidebarGroupLabel className="mx-auto mt-6">
              <div className=" mt-7">
                <h1 className="font-semibold text-[16px] text-white">
                  Sundar Gurung
                </h1>
                <p className="text-[12px] text-white">
                  sundargurung360@gmail.com
                </p>
              </div>
            </SidebarGroupLabel>

            {/* Menu Items */}
            <SidebarGroupContent className="mt-10">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="w-60 mx-auto">
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-4 p-5 mt-5 rounded-lg transition ${
                          active === item.title
                            ? "bg-white text-[#ff6767]"
                            : "text-white hover:bg-white/10"
                        }`}
                        onClick={() => setActive(item.title)}
                      >
                        {/* Icon or Image */}

                        {item.type === "image" && (
                          <Image
                            src={active === item.title ? item.img1 : item.img2}
                            alt={item.title}
                            width={20}
                            height={20}
                          />
                        )}
                        <span className="text-[16px] font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer (Exit button) */}
        <SidebarFooter className="mt-auto mb-6">
          <Link
            href="#"
            className="flex items-center justify-center gap-2 text-white hover:bg-white/10 py-3 rounded-lg"
          >
            <LogOut size={20} />
            <span>Exit</span>
          </Link>
        </SidebarFooter>
      </div>
      <div className="absolute top-10 left-35">
        <Image src="/Profile.png" alt="" width={80} height={32} />
      </div>
    </Sidebar>
  );
}
