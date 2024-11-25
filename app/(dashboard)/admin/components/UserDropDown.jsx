import { getUser, removeCookie } from "@/app/actions/cookieActions";
import { Separator } from "@/components/ui/separator";

const UserDropDown = async () => {
  const user = await getUser();
  return (
    <div className="flex items-center gap-2">
      <h2>{user?.username}</h2>
      <Separator orientation="vertical" className="h-6" />
      <form action={removeCookie}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default UserDropDown;
