"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import TextAreaField from "../../projects/components/TextAreaField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  // name: z.string().min(3),
  designation: z.string().min(3),
  bio: z.string().min(10),
  interests: z.string().min(10),
});

const AboutForm = ({ aboutData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // name: aboutData?.name,
      designation: aboutData?.designation,
      bio: aboutData?.bio,
      interests: aboutData?.interests,
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);

      const response = await fetch(`/api/about/${aboutData?.id}`, {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
        {/* name */}
        {/* <InputField form={form} name="name" placeholder="My Name" /> */}

        {/* Designation */}
        <InputField form={form} name="designation" placeholder="Designation" />

        {/* bio */}
        <TextAreaField form={form} name="bio" placeholder="Short Bio" />

        {/* interests */}
        <TextAreaField
          form={form}
          name="interests"
          placeholder="Your Interests"
        />

        {/* submit button */}
        <Button
          disabled={isLoading}
          type="submit"
          variant="long"
          className="mt-4"
        >
          {isLoading ? (
            <>
              <LoadingSpinner h={5} w={5} /> Updating...
            </>
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AboutForm;
