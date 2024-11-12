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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters long",
  }),
  description: z.string().min(5),
  //   url: z.string().url(),
  //   technologies: z.array(z.string()).min(1),
  //   code_link: z.string().url(),
  //   live_url: z.string().url(),
});

const AddProject = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
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
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Project Title"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-2 focus-visible:border-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Project Description"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-2 focus-visible:border-slate-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProject;
