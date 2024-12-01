import SocialLinkCard from "./SocialLinkCard";

const SocialLinkLists = ({ socialLinks }) => {
  //   console.log(socialLinks);
  return (
    <div className="w-full border rounded-lg p-3 max-h-[765px] overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
      {socialLinks?.map((social) => (
        <SocialLinkCard key={social.id} social={social} />
      ))}
    </div>
  );
};

export default SocialLinkLists;
