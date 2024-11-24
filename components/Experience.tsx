import React from "react";
import { workExperienceData } from "@/data/workExpData";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full">
        <Timeline data={workExperienceData} />
      </div>
    </div>
  );
};

export default Experience;
