import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import CustomSidebar from "../../../component/sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.

export default function Sidebar() {
  return (
    <div className="bg-transparent">
      <SidebarProvider className="bg-transparent border-none">
        <CustomSidebar />
      </SidebarProvider>
    </div>
  );
}
