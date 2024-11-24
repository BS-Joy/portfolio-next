"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteProjectAlert = ({ project }) => {
  const router = useRouter();

  const handleDelete = async () => {
    toast.promise(
      fetch("/api/project", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: project.id }),
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to delete project");
        }
        return response.json();
      }),
      {
        loading: "Deleting project...",
        success: () => {
          // router.refresh();
          return "Project deleted successfully.";
        },
        error: "Failed to delete project!",
        finally: () => router.refresh(),
      }
    );
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="hover:bg-[#ffd4da] p-2 rounded-full transition-all duration-300 ease-in">
        <Trash2 size={16} color="#de2642" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProjectAlert;
