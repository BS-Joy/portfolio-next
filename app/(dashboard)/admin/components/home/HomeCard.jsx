import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiSkills } from "react-icons/gi";

const HomeCard = ({ title, count }) => {
  return (
    <Card className="min-w-[250px] w-full hover:scale-95 transition-all hover:cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <GiSkills />
          <h2 className="text-2xl">{count}</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
