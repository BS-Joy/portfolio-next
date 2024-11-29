"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import MultipleSelector from "@/components/ui/multiple-selector";
import LoadingSpinner from "@/components/LoadingSpinner";
import TextAreaField from "./TextAreaField";
import InputField from "../../components/InputField";

const tech = [
  { value: "react", label: "React" },
  { value: "next", label: "Next Js" },
  { value: "redux", label: "Redux" },
  { value: "tailwind", label: "Tailwind" },
  { value: "prisma", label: "Prisma" },
  { value: "mongodb", label: "MongoDB" },
];

const CreateUpdateForm = ({ form, onSubmit, isLoading, isUpdating }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
        {/* title */}
        <InputField form={form} name="title" placeholder="Project Title" />

        {/* description */}
        <TextAreaField
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
                  placeholder="Select technologies you used..."
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
        <Button
          disabled={isLoading}
          type="submit"
          variant="long"
          className="mt-4"
        >
          {isLoading ? (
            <>
              <LoadingSpinner h={5} w={5} />{" "}
              {isUpdating ? "Updating..." : "Creating..."}
            </>
          ) : (
            `${isUpdating ? "Update" : "Create"}`
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateUpdateForm;
