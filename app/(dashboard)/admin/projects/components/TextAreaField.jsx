"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TextAreaField = ({ form, name, placeholder }) => {
  const label = name.includes("_") ? name.replace("_", " ") : name;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-3">
          <FormLabel className="capitalize">{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-2 focus-visible:border-slate-500"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaField;
