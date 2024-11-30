"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UpdateSocialLinkDialog } from "./UpdateSocialLinkDialog";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(social?.enable);
  const router = useRouter();

  const SelectedIcon = icons[social.label].icon;

  // console.log(icon);

  const handlePublish = async () => {
    try {
      setIsLoading(true);
      setChecked(!checked);
      const values = { publish: !checked };
      const response = await fetch(`/api/project/${project?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        setIsLoading(false);
        toast.success(`Project is ${checked ? "hidden" : "published"} now.`);
        router.refresh();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error("Something went wrong! Please try again");
    }
  };

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
