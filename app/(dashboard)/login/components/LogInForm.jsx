"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import InputField from "../../admin/components/InputField";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "User name must be at least 3 characters or more.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters or more.",
  }),
});

const LogInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.status === 401) {
        setIsLoading(false);
        toast.error(data);
      } else {
        setIsLoading(false);
        router.push("/admin");
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-4 border rounded-md w-full max-w-[350px]"
      >
        <h1 className="text-center text-xl my-3 font-semibold">Log In</h1>
        {/* userName */}
        <InputField form={form} name="username" placeholder="Username" />

        {/* password */}
        <InputField
          form={form}
          name="password"
          placeholder="Password"
          type={"password"}
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
              <LoadingSpinner h={5} w={5} />
              Logging in...
            </>
          ) : (
            "Log In"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LogInForm;
