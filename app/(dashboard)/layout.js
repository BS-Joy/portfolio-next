import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./admin/components/AdminSidebar";
import NavBredCrumb from "./admin/components/NavBredCrumb";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "BS-Joy: Admin Panel",
  description: "Admin panel for the portfolio",
};

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <AdminSidebar />

      <main className="w-full">
        <div className="flex items-center gap-1 ml-3 mt-2">
          <SidebarTrigger className="" />
          <NavBredCrumb />
        </div>
        {children}
      </main>
      <Toaster richColors theme="light" />
    </SidebarProvider>
  );
}
