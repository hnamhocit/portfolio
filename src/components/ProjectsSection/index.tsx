import { useState } from "react";
import type { IProject } from "../../interfaces";
import Project from "./Project";

function ProjectsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState<IProject[]>([
    {
      id: "proj_001",
      thumbnailURL: "https://www.nait.vn/uploads/news/2024/08/ai.jpg",
      title: "AI-Powered Task Manager",
      slug: "ai-powered-task-manager",
      content:
        "An intelligent task management platform that leverages machine learning to prioritize and automate daily workflows. Built with React, Node.js, and PostgreSQL.",
      createdAt: 1672531200000, // Jan 1, 2023
      updatedAt: 1688169600000, // July 1, 2023
    },
    {
      id: "proj_002",
      thumbnailURL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      title: "Realtime Collaboration Suite",
      slug: "realtime-collaboration-suite",
      content:
        "A real-time collaboration web app with shared documents, messaging, and team spaces. Powered by WebSockets, Redis, and TypeScript backend.",
      createdAt: 1680393600000, // Apr 2, 2023
      updatedAt: 1693526400000, // Sep 1, 2023
    },
  ]);

  return (
    <div className="space-y-7">
      <div className="text-2xl text-center font-bold uppercase bg-gradient-to-br from-[#ff855f] via-[#ff855f] to-purple-500 bg-clip-text text-transparent">
        PROJECTS
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <Project key={project.id} {...project} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
