import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import CustomSidebar from "../../../component/sidebar";

import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.

export default function page() {
  return (
    <SidebarProvider className="bg-red">
      <CustomSidebar />
    </SidebarProvider>
  );
}
