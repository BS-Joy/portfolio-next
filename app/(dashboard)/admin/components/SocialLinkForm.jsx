"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import InputField from "./InputField";

const SocialLinkForm = ({ form, onSubmit, isLoading, isUpdating }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4">
        {/* social link label */}
        <InputField
          disabled={true}
          form={form}
          name="label"
          placeholder="Social Platform Name"
        />

        {/* social link */}
        <InputField form={form} name="link" placeholder="Platform link" />

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

export default SocialLinkForm;
