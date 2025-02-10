import WorkExperience from "@/components/desktop/Experience";
import Projects from "@/components/desktop/Projects";
import { Skills } from "@/components/desktop/Skills";
import { SocialLinks } from "@/components/desktop/SocialLinks";
import { MenuItem } from "@/types";
import Image from "next/image";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    name: "Home",
    content: (
      <div className="text-lg">
        <h3 className="text-5xl font-dm-serif-display">Hey, I&apos;m Rahul!</h3>
        <p className="max-w-2xl " style={{ marginTop: "24px" }}>
          I&apos;m a Full Stack Developer based in Phoenix, AZ, with a focus on
          building scalable backend systems, AI-driven personalization engines,
          and automation platforms. Currently, I&apos;m pursuing a Master&apos;s
          in Computer Science at{" "}
          <a
            href="https://www.asu.edu/"
            target="_blank"
            style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            Arizona State University.
          </a>
        </p>

        <SocialLinks />
      </div>
    ),
  },
  {
    id: "about",
    name: "About",
    content: (
      <div className="flex space-x-8">
        <div>
          <h3 className="text-5xl font-dm-serif-display">About Me!</h3>
          <p className="max-w-2xl " style={{ marginTop: "24px" }}>
            I&apos;m Rahul Shah, currently pursuing a Master’s in Computer
            Science at Arizona State University. My coding journey started
            unexpectedly in college, taking a web development elective. Now, as
            a software engineer, I&apos;ve worked on diverse tech projects,
            focusing on improving user experiences.
          </p>
          <p className="max-w-2xl " style={{ marginTop: "12px" }}>
            Outside of coding, you&apos;ll find me hiking, playing table tennis,
            or brainstorming over coffee. I&apos;m eager to contribute my skills
            to projects that break norms and push boundaries. Let&apos;s create
            something awesome together.
          </p>

          <h4 style={{ marginTop: "18px" }}>
            Tools and Technology I work with
          </h4>
          <Skills />
        </div>

        <div className="rounded-lg bg-green-200">
          <Image
            src="/profile.jpeg"
            alt="Rahul Shah"
            width={1000}
            height={600}
            className="w-48 h-48 rounded-lg"
          />
        </div>
      </div>
    ),
  },
  {
    id: "experience",
    name: "Experience",
    content: <WorkExperience />,
  },
  {
    id: "projects",
    name: "Projects",
    content: <Projects />,
  },
];
