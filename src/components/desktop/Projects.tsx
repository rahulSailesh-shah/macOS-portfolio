import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  details: string[];
  link?: string;
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "CreateAI Platform",
    description:
      "Developed a Figma clone with live collaboration, multi-cursors, reactions, and comments.",
    techStack: [
      "DynamoDB",
      "API Gateway",
      "Web Sockets",
      "Python",
      "FastAPI",
      "React",
    ],
    details: [
      "Engineered the backend for ASUGPT, an AI assistant using multiple LLMs, supporting students and professors across ASU",
      "Implemented Vector Databases and Data Pipelines on OpenSearch for scalable Information retrieval.",
      "Building three scalable full-stack platforms serving over 150,000+ users to build, compare, and interact with various LLMs using AWS Bedrock, OpenSearch, and Llamaindex with audio and image support.",
    ],
    imageUrl: "/createAI.png",
  },
  {
    title: "FigPro",
    description:
      "Developed a Figma clone with live collaboration, multi-cursors, reactions, and comments.",
    techStack: ["Next.js", "Liveblocks", "Fabric.js", "Tailwind"],
    details: [
      "Built a real-time collaborative Figma clone.",
      "Implemented multi-cursors and active user tracking.",
      "Integrated comment bubbles, shape creation, and image uploads.",
    ],
    githubLink: "https://github.com/rahulSailesh-shah/Figma-Clone",
    liveLink: "https://figma-clone-coral.vercel.app/",
    imageUrl: "/figma.webp",
  },
  {
    title: "InfoFetchBot",
    description:
      "Built a Discord bot that processes messages to trigger web searches and scrape website content using AI.",
    techStack: ["Python", "Discord API", "Open AI", "AutoGen", "NotionAPI"],
    details: [
      "Built a bot that scrapes content from websites using AI agents.",
      "Delivers summaries directly into Notion for easy data retrieval.",
      "Uses Discord API for seamless user interaction.",
    ],
    githubLink: "https://github.com/rahulSailesh-shah/InfoFetchBot",
  },
  {
    title: "CoDev Space",
    description:
      "Crafted a collaborative online Python coding IDE using React and Web Sockets enabling real-time code development.",
    techStack: ["Web Sockets", "React", "Redux", "Express", "MongoDB"],
    details: [
      "Real-time collaboration in Python IDE.",
      "Enabled shared coding rooms for seamless teamwork.",
      "Integrated with WebSockets for live collaboration.",
    ],
    githubLink: "https://github.com/rahulSailesh-shah/CoDev-Space",
    liveLink: "https://codev-space.onrender.com/",
    imageUrl: "/codev.webp",
  },
  {
    title: "AutoDeploy",
    description:
      "Developed a backend application to automate React project builds from GitHub URLs using ECS build servers.",
    techStack: ["Node.js", "S3", "ECR", "ECS", "Redis", "Web Sockets"],
    details: [
      "Automates React project builds from GitHub URLs.",
      "Deploys static files to S3 and generates custom URLs.",
      "Uses ECS build servers and reverse proxy for efficient serving.",
    ],
    githubLink: "https://github.com/rahulSailesh-shah/Deploy-Buddy",
  },
  {
    title: "Route Tracker",
    description:
      "Developed a React Native mobile app that tracks and records routes using GPS, with MongoDB storage for review.",
    techStack: ["React Native", "Node.js", "MongoDB", "Express"],
    details: [
      "Mobile app tracks routes using GPS capabilities.",
      "Stores recorded routes in MongoDB for review.",
      "User authentication and data privacy included.",
    ],
    githubLink: "https://github.com/rahulSailesh-shah/Route-Tracker",
    imageUrl: "/route.webp",
  },
];

const Projects: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Remove if already open
          : [...prevIndexes, index] // Add if closed
    );
  };

  return (
    <div>
      <h3 className="text-5xl font-dm-serif-display mb-6">Projects!</h3>
      <p className="text-base mb-8">
        Here are some projects I&apos; worked on. Due to academic policies or
        non-disclosures, some of the code isn&apos;t posted.
      </p>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-[#575757] rounded-lg p-4 bg-white dark:bg-[#282828] shadow-sm"
          >
            {/* Project Title */}
            <div
              className="flex justify-between items-center mt-1 cursor-pointer"
              onClick={() => toggleExpand(index)} // Make the whole div clickable
            >
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {project.title}
              </span>
              <span className="flex items-center text-gray-500 dark:text-gray-400">
                {openIndexes.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>

            {/* Tech Stack always shown */}
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <p>{project.techStack.join(", ")}</p>
            </div>

            {/* Show detailed section when expanded */}
            {openIndexes.includes(index) && (
              <div className="mt-3 text-base text-gray-700 dark:text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {/* Optionally show image if present */}
                {project.imageUrl && (
                  <div className="mt-3">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      width={800}
                      height={450}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}

                {/* Links to GitHub and Live Site */}
                <div className="mt-3 flex justify-end space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900  transition"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
