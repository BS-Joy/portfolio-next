"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import AboutForm from "./AboutForm";

const UpdateAboutDialog = ({ aboutData }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:bg-[#d0edf7] p-2 rounded-full transition-all duration-300 ease-in">
          <Pencil size={16} color="#26b0de" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit About Data</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you&apos;re done. */}
          </DialogDescription>
        </DialogHeader>

        {/* about form */}
        <AboutForm aboutData={aboutData} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateAboutDialog;
