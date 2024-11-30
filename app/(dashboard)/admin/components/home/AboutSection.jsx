import UpdateAboutDialog from "./UpdateAboutDialog";

const AboutSection = async ({ aboutData }) => {
  return (
    <div className="w-full border max-h-[400px] overflow-hidden rounded-lg p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-center">About Me</h2>
        <UpdateAboutDialog aboutData={aboutData} />
      </div>

      {/* user details */}
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4">Name: {aboutData?.name}</h2>
        <p className="mb-2">
          <span className="font-semibold">Designation</span>:{" "}
          {aboutData.designation}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Bio</span>: {aboutData.bio}
        </p>
        <p>
          <span className="font-semibold">Interests</span>:{" "}
          {aboutData.interests}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
