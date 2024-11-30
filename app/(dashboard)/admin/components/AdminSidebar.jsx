"use client";
import {
  LayoutDashboard,
  BookOpenText,
  CodeXml,
  MonitorCog,
  User2,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  // {
  //   title: "Pages",
  //   url: "#",
  //   icon: BookOpenText,
  // },
  // {
  //   title: "Skills",
  //   url: "#",
  //   icon: CodeXml,
  // },
  {
    title: "Projects",
    url: "/admin/projects",
    icon: MonitorCog,
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const pathName = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className={`${state == "collapsed" && "p-0"}`}>
            <h1
              className={`text-2xl bg-green-500 text-white border text-center w-full rounded `}
            >
              {state === "expanded" ? "BS-Joy" : "B"}
            </h1>
          </SidebarHeader>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      pathName === item.url && "bg-sidebar-accent"
                    }`}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* sidebar footer */}
      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus-visible:ring-0">
                <SidebarMenuButton className="ring-none">
                  <User2 /> {user?.username}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <LogoutButton />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
    </Sidebar>
  );
}
