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
import { toast } from "sonner";
import SocialLinkForm from "./SocialLinkForm";

const formSchema = z.object({
  label: z.string().min(3),
  link: z.string().min(5),
  //   enable: z.boolean,
});

export function UpdateSocialLinkDialog({ social }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: social?.label || "",
      link: social?.link || "",
      //   enable: social?.enable || true,
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/social/${social?.id}`, {
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
          <DialogTitle>Edit Social Link</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you&apos;re done. */}
          </DialogDescription>
        </DialogHeader>
        <SocialLinkForm
          form={form}
          onSubmit={onSubmit}
          isLoading={isLoading}
          isUpdating={true}
        />
      </DialogContent>
    </Dialog>
  );
}
