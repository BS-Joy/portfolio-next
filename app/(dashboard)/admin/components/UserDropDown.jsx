import { getUser, removeCookie } from "@/app/actions/cookieActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const UserDropDown = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`);

  const aboutData = await res.json();
  return (
    <div className="flex items-center gap-2 mt-3">
      <Avatar className="h-7 w-7">
        <AvatarImage src={aboutData?.ppUrl} />
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <Separator orientation="vertical" className="h-6" />
      <form action={removeCookie}>
        <button
          className="bg-red-100 text-red-500 px-3 rounded py-1 border border-red-100 hover:border-red-500 hover:bg-red-400 hover:text-white transition-colors duration-500"
          type="submit"
        >
          Log out
        </button>
      </form>
    </div>
  );
};

export default UserDropDown;
