import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaXTwitter,
} from "react-icons/fa6";

const ContactSection = async ({ socialLinks }) => {
  return (
    <section id="contacts" className="contact-section">
      <div className="ml-16">
        <h2 className="section-title interests-title">Contact</h2>
        <div className="social">
          <div className="connect github">
            <FaGithub size={"1.3rem"} color="white" />
            <a href={socialLinks[0].link} target="_blank">
              Github
            </a>
          </div>
          <div className="connect linkd">
            <FaLinkedin size={"1.3rem"} color="#0A66C2" />
            <a href={socialLinks[1].link} target="_blank">
              LinkedIn
            </a>
          </div>
          <div className="connect stack">
            <FaStackOverflow size={"1.3rem"} color="#F48024" />
            <a href={socialLinks[2].link} target="_blank">
              Stack-overflow
            </a>
          </div>
          <div className="connect twt">
            <FaXTwitter size={"1.3rem"} color="#E7E9EA" />
            <a href={socialLinks[3].link} target="_blank">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
