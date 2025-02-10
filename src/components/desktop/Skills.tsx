import React from "react";
import {
  FaJava,
  FaNodeJs,
  FaReact,
  FaAws,
  FaDocker,
  FaGit,
} from "react-icons/fa";
import {
  SiGoland,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiGraphql,
  SiFastapi,
  SiSpringboot,
  SiAmazondynamodb,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiRedis,
  SiApachekafka,
  SiSelenium,
  SiLangchain,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactElement;
};

const skills: Skill[] = [
  { name: "Java", icon: <FaJava /> },
  { name: "Go", icon: <SiGoland /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "GenAI", icon: <SiLangchain /> },
  { name: "Autogen", icon: <SiLangchain /> },
  { name: "DynamoDB", icon: <SiAmazondynamodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Apache Kafka", icon: <SiApachekafka /> },
  { name: "Selenium", icon: <SiSelenium /> },
];

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 py-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm
                     bg-white text-gray-800 dark:bg-[#282828] dark:text-gray-200
                     hover:shadow-md dark:hover:bg-gray-800 transition duration-200"
        >
          <span className="text-xl">{skill.icon}</span>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};
