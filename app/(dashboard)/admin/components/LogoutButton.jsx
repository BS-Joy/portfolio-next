"use client";
import { removeCookie } from "@/app/actions/cookieActions";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const LogoutButton = () => {
  const handleSignOut = async () => {
    console.log("signing out..");
    await removeCookie();
  };
  return (
    <DropdownMenuItem
      onClick={handleSignOut}
      className="focus:bg-zinc-50 cursor-pointer"
    >
      <span>Sign out</span>
    </DropdownMenuItem>
  );
};

export default LogoutButton;
