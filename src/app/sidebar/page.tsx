import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import CustomSidebar from "../../../component/Sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.

type SidebarProps = {
  active: string; // Change 'string' to the correct type if needed
  setActive: (value: string) => void; // Adjust type if needed
};

export default function Sidebar({ active, setActive }: SidebarProps) {
  return (
    <div className="bg-transparent">
      <SidebarProvider className="bg-transparent border-none">
        <CustomSidebar active={active} setActive={setActive} />
      </SidebarProvider>
    </div>
  );
}
