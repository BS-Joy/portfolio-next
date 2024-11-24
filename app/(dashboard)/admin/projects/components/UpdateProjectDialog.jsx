"use client";

import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateUpdateForm from "./CreateUpdateForm";
import { toast } from "sonner";

const tech = [
  { value: "react", label: "React" },
  { value: "next", label: "Next Js" },
  { value: "redux", label: "Redux" },
  { value: "tailwind", label: "Tailwind" },
  { value: "prisma", label: "Prisma" },
  { value: "mongodb", label: "MongoDB" },
];

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters long",
  }),
  description: z.string().min(5),
  tags: z.array(optionSchema).min(1),
  code_link: z.string().url(),
  live_url: z.string().url(),
});

export function UpdateProjectDialog({ project }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      tags: project?.tags,
      code_link: project?.code_link || "",
      live_url: project?.live_url || "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/project/${project?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        setIsLoading(false);
        toast.success("Project updated successfully.");
        router.refresh();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error("Failed to create project. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:bg-[#d0edf7] p-2 rounded-full transition-all duration-300 ease-in">
          <Pencil size={16} color="#26b0de" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you&apos;re done. */}
          </DialogDescription>
        </DialogHeader>
        <CreateUpdateForm
          form={form}
          onSubmit={onSubmit}
          isLoading={isLoading}
          isUpdating={true}
        />
      </DialogContent>
    </Dialog>
  );
}
