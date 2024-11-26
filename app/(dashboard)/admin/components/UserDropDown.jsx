import { getUser, removeCookie } from "@/app/actions/cookieActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const UserDropDown = async () => {
  const user = await getUser();
  // console.log("user:", user);
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-7 w-7">
        <AvatarImage src="https://res.cloudinary.com/dplw9tch5/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1732611583/IMG_8253-min_vs3dzg.jpg" />
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
