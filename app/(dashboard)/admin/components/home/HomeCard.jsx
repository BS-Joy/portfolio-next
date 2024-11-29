import { getDashboardIcon } from "@/app/icons/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const HomeCard = ({ title, iconSize, count }) => {
  const Icon = getDashboardIcon(title);

  const linkParams = title.toLowerCase();
  return (
    <Link className="w-full" href={`/admin/${linkParams}`}>
      <Card className="min-w-[250px] w-full hover:scale-95 transition-all hover:cursor-pointer">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Icon size={iconSize} />
            <h2 className="text-2xl">{count}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HomeCard;
