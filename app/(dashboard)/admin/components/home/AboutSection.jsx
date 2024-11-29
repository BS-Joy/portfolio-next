import UpdateAboutDialog from "./UpdateAboutDialog";

const AboutSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about`);

  const aboutData = await res.json();

  // console.log(aboutData);

  return (
    <div className="w-full border max-h-[598px] rounded-lg p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-center">About Me</h2>
        <UpdateAboutDialog aboutData={aboutData} />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-semibold mb-4">Name: {aboutData?.name}</h2>
        <p>
          <span className="font-semibold">Designation</span>:{" "}
          {aboutData.designation}
        </p>
        <p>
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
