"use client";

import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const UploadImage = ({ userData }) => {
  const router = useRouter();
  const handleOnUpload = async (results, close) => {
    try {
      userData.ppUrl = results.info.secure_url;
      const { id, ...restData } = userData;

      const response = await fetch(`/api/about/${userData?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restData),
      });

      // close the widget
      close();

      if (response.status === 200) {
        toast.success("Image changed successfully.");
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <CldUploadButton
        uploadPreset="portfolio"
        options={{ sources: ["local", "url", "google_drive", "dropbox"] }}
        className="bg-sky-500 text-white text-sm px-4 py-2 rounded-md"
        onSuccess={(results, { close }) => handleOnUpload(results, close)}
      >
        Change Image
      </CldUploadButton>
    </div>
  );
};

export default UploadImage;
