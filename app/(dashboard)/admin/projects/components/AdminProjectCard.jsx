"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { BadgeInfo, FolderGit2, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const AdminProjectCard = ({ project }) => {
  const [c, setC] = useState(false);
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="inline-flex gap-1">
            <button>
              <FolderGit2 color="#26b0de" size={21} />
            </button>
            <h3 className="ml-2">{project.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <button className="hover:bg-[#d0edf7] p-2 rounded-full transition-all duration-200">
              <Pencil size={16} color="#26b0de" />
            </button>
            <button className="hover:bg-[#ffd4da] p-2 rounded-full transition-all duration-200">
              <Trash2 size={16} color="#de2642" />
            </button>
            <Switch
              className="ml-2"
              rootHeight={5}
              rootWidth={10}
              thumbSize={4}
              checked={project?.publish}
              onCheckedChange={() => setC(!c)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminProjectCard;
