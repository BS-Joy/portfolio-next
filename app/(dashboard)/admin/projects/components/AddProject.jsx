"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateUpdateForm from "./CreateUpdateForm";
import LoadingSpinner from "@/components/LoadingSpinner";

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

const AddProject = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      code_link: "",
      live_url: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Auth": JSON.stringify(user),
        },
        body: JSON.stringify(values),
        credentials: "include",
      });

      if (response.status === 201) {
        setIsLoading(false);
        toast.success("Project created successfully.");
        router.refresh();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error("Failed to create project. Please try again.");
    }
  };

  return (
    <div className="w-full border max-h-[598px] rounded-lg p-2">
      <h2 className="text-2xl font-semibold text-center">Add Project</h2>
      <CreateUpdateForm form={form} onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  );
};

export default AddProject;
