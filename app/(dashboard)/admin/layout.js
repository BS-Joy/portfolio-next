import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./components/AdminSidebar";
import NavBredCrumb from "./components/NavBredCrumb";
import { Toaster } from "@/components/ui/sonner";
import UserDropDown from "./components/UserDropDown";

export const metadata = {
  title: "BS-Joy: Admin Panel",
  description: "Admin panel for the portfolio",
};

export default async function RootLayout({ children }) {
  // console.log(Date.now());
  return (
    <SidebarProvider>
      <AdminSidebar />

      <main className="w-full">
        <div className="flex justify-between items-center gap-1 ml-3 mr-8 mt-2">
          <div className="flex items-center gap-1 ml-3 mt-2">
            <SidebarTrigger />
            <NavBredCrumb />
          </div>
          <UserDropDown />
        </div>
        {children}
      </main>
      <Toaster richColors position="top-center" theme="light" />
    </SidebarProvider>
  );
}
