import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaTwitter />, url: "https://x.com/rahul_shah107", label: "Twitter" },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/rahul-shah17/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/rahulSailesh-shah",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:shah.rahulsailesh@gmail.com",
    label: "Email",
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4 mt-8">
      <span className="text-lg font-medium ">Find me on</span>
      <div className="flex gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full
                       bg-gray-700 text-white dark:bg-gray-200 dark:text-gray-800
                       hover:bg-gray-500 dark:hover:bg-gray-300 transition duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
