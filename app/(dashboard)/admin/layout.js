import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./components/AdminSidebar";
import NavBredCrumb from "./components/NavBredCrumb";
import { Toaster } from "@/components/ui/sonner";
import { getUser } from "@/app/actions/cookieActions";

export const metadata = {
  title: "BS-Joy: Admin Panel",
  description: "Admin panel for the portfolio",
};

export default async function RootLayout({ children }) {
  const user = await getUser();

  return (
    <SidebarProvider>
      <AdminSidebar user={user} />

      <main className="w-full">
        <div className="flex items-center gap-1 ml-3 mt-2">
          <SidebarTrigger className="" />
          <NavBredCrumb />
        </div>
        {children}
      </main>
      <Toaster richColors position="top-center" theme="light" />
    </SidebarProvider>
  );
}
