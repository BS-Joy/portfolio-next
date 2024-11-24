"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { FolderGit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import DeleteProjectAlert from "./DeleteProjectAlert";
import { UpdateProjectDialog } from "./UpdateProjectDialog";
import LoadingSpinner from "@/components/LoadingSpinner";

const AdminProjectCard = ({ project }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(project?.publish);
  const router = useRouter();

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
              <FolderGit2 color="#3684e3" size={21} />
            </button>
            <h3 className="ml-2">{project.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <UpdateProjectDialog project={project} />
            <DeleteProjectAlert project={project} />

            {isLoading ? (
              <LoadingSpinner h={5} w={5} />
            ) : (
              <Switch
                className="ml-2"
                rootHeight={5}
                rootWidth={10}
                thumbSize={4}
                checked={checked}
                onCheckedChange={handlePublish}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminProjectCard;
