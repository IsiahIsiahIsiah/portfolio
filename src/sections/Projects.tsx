import * as React from "react";

import { FocusCards } from "@/components/ui/focus-cards";

import Prime from "../assets/PrimeWebsite.png";

export const Projects: React.FC = () => {
  return (
    <div id="projects" className="projects">
      <h2 className="text-center text-5xl font-bold mb-8 ">Projects</h2>
      <p className="text-center text-lg text-white/60 mb-16">
        A selection of my recent work.
      </p>
      <FocusCards
        cards={[
          {
            title: "Prime Electrical And Data",
            src: Prime,
          },
          {
            title: "CMD Projects",
            src: "https://via.placeholder.com/400x300?text=Project+2",
          },
          {
            title: "Project 3",
            src: "https://via.placeholder.com/400x300?text=Project+3",
          },
        ]}
      />
    </div>
  );
}

export default Projects;