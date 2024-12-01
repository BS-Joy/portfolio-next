import { Card, CardContent } from "@/components/ui/card";
import { UpdateSocialLinkDialog } from "./UpdateSocialLinkDialog";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaXTwitter,
} from "react-icons/fa6";

const icons = {
  Github: {
    icon: FaGithub,
  },
  LinkedIn: {
    icon: FaLinkedin,
  },
  "Stack-overflow": {
    icon: FaStackOverflow,
  },
  "Twitter / X": {
    icon: FaXTwitter,
  },
};

const SocialLinkCard = ({ social }) => {
  const SelectedIcon = icons[social.label].icon;

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="inline-flex gap-1">
            <button>
              <SelectedIcon />
            </button>
            <h3 className="ml-2">{social.label}</h3>
          </div>
          <div className="flex items-center gap-3">
            <UpdateSocialLinkDialog social={social} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinkCard;
