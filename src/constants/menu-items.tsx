import { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "projects",
    name: "Projects",
    content: (
      <div>
        <h1 className="text-2xl font-bold mb-4">My Projects</h1>
        <p>Here are some of my recent projects...</p>
      </div>
    ),
  },
  {
    id: "experience",
    name: "Experience",
    content: (
      <div>
        <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
        <p>My professional journey...</p>
      </div>
    ),
  },
  {
    id: "about",
    name: "About Me",
    content: (
      <div>
        <h1 className="text-2xl font-bold mb-4">Hey, Im Kristen!</h1>
        <p>
          Im currently a software engineer at Apple, working on the Siri Client
          team. I recently graduated from the University of British Columbia,
          where I studied Computer Science.
        </p>
        <div className="mt-4">
          <p>Find me on</p>
          {/* Add your social links here */}
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    name: "Contact",
    content: (
      <div>
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <p>Get in touch...</p>
      </div>
    ),
  },
];
