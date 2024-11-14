"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputField from "./InputField";
import MultipleSelector from "@/components/ui/multiple-selector";

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

const AddProject = () => {
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
    console.log(values);
  };

  return (
    <div className="w-full border rounded-lg p-2">
      <h2 className="text-2xl font-semibold text-center">Add Project</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
          {/* title */}
          <InputField form={form} name="title" placeholder="Project Title" />

          {/* description */}
          <InputField
            form={form}
            name="description"
            placeholder="Project Description"
          />

          {/* tags */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormLabel className="capitalize">Technologies Used</FormLabel>
                <FormControl>
                  <MultipleSelector
                    {...field}
                    defaultOptions={tech}
                    placeholder="Select frameworks you like..."
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-2 focus-visible:border-slate-500 focus-within:ring-0 focus-within:ring-offset-2 focus-within:ring-offset-slate-500 outline-none"
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* code link */}
          <InputField form={form} name="code_link" placeholder="Code link" />

          {/* live url */}
          <InputField form={form} name="live_url" placeholder="Live Url" />

          {/* submit button */}
          <Button type="submit" variant="long" className="mt-4">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProject;
