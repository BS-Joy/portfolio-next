import { getAboutData } from "@/queries";
import React from "react";

const Interest = async () => {
  const { interests } = await getAboutData();
  return (
    <section id="interests" className="interests-section">
      <div className="interests-text">
        <h2 className="section-title interests-title">Interests</h2>
        <p>{interests}</p>
      </div>
    </section>
  );
};

export default Interest;
