import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  summary: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer Co-op",
    company: "Solutions Unified LLC",
    location: "New Jersey, United States",
    duration: "May 2024 - Present",
    summary:
      "At Solutions Unified, I got my hands dirty building a high-performance Go microservice that seamlessly integrated Stripe payments, making transactions 40% faster. But that was just the start—I automated cloud deployments with AWS CDK, turning what used to be a tedious setup into a one-click process. Oh, and I also built a Rust-based API with WebSockets and OAuth 2.0, making real-time communication secure and blazing fast. To top it off, I designed a Kafka-powered notification system that ensured no support request ever got lost in the void.",
  },
  {
    title: "AI Full-Stack Developer",
    company: "Enterprise Technology, ASU",
    location: "Arizona, United States",
    duration: "January 2024 - January 2025",
    summary:
      "Ever wondered what it takes to deploy AI at scale? At ASU, I worked on building an MLOps pipeline that made managing large language models feel like a breeze. I spun up Kubernetes clusters on AWS, containerized AI applications with Docker, and optimized OpenSearch to squeeze every ounce of speed out of our queries. Meanwhile, I was also busy crafting a full-fledged AI-powered platform using React, DynamoDB, and FastAPI, giving ASU faculty an intuitive way to interact with LLMs. To keep everything running smoothly, I set up a Jenkins CI/CD pipeline that handled 100+ weekly builds—because who likes manual deployments?",
  },
  {
    title: "Software Engineer II (Full-Stack)",
    company: "Allegion (Schlage)",
    location: "Bengaluru, India",
    duration: "June 2020 - July 2023",
    summary:
      "At Allegion, I tackled the challenge of keeping multi-region applications fast and reliable. I optimized DynamoDB and Redis replication, ensuring data was always where it needed to be. When our monolithic app started feeling sluggish, I helped break it down into microservices running on Kubernetes and Docker, making it far more scalable. One of my favorite projects was designing a full-stack document storage system with React, Node.js, and PostgreSQL, which transformed the team's workflow. And for good measure, I built an automation framework with Selenium and Appium, freeing up countless hours of manual testing.",
  },
];

const WorkExperience: React.FC = () => {
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
      <h3 className="text-5xl font-dm-serif-display mb-6">Experience !</h3>
      <p className="text-base mb-8">
        Here are some places I&apos;ve worked at over the years:
      </p>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-[#575757] rounded-lg p-4 bg-white dark:bg-[#282828] shadow-sm"
          >
            {/* Duration on top */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {exp.duration}
            </p>

            {/* Company name below duration */}
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
              {exp.company}
              {", "}
              <span className="font-jost ml-2">
                {exp.location && `${exp.location}`}
              </span>
            </p>

            {/* Title and icon on the extreme right */}
            <div
              className="flex justify-between items-center mt-1 cursor-pointer"
              onClick={() => toggleExpand(index)} // Make the whole div clickable
            >
              <span className="text-base text-gray-500 font-jost dark:text-gray-400">
                {exp.title}
              </span>
              <span className="flex items-center text-gray-500 dark:text-gray-400">
                {openIndexes.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>

            {/* Show summary if expanded */}
            {openIndexes.includes(index) && (
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                {exp.summary}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
