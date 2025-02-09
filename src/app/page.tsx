"use client";

import { useEffect, useState } from "react";
import { MenuItem } from "@/types";
import { Folder } from "@/components/desktop/Folder";
import { Window } from "@/components/desktop/Window";
import { MenuBar } from "@/components/desktop/MenuBar";
import { menuItems } from "@/constants/menu-items";
import { Resume } from "@/components/desktop/Resume";

const FOLDER_HEIGHT = 95;
const INITIAL_OFFSET = { x: 10, y: 48 };

export default function Home() {
  const [activeWindow, setActiveWindow] = useState<MenuItem["id"] | null>(
    "home"
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [windowPosition, setWindowPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: window.innerWidth / 2 - 400,
    y: window.innerHeight / 2 - 200,
  });

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const toggleWindow = (id: MenuItem["id"]): void => {
    if (activeWindow === id) {
      setActiveWindow(null);
    } else {
      setActiveWindow(id);
      setWindowPosition({
        x: window.innerWidth / 2 - 400,
        y: window.innerHeight / 2 - 200,
      });
    }
  };

  const getInitialPosition = (index: number) => ({
    x: INITIAL_OFFSET.x,
    y: index * FOLDER_HEIGHT,
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen bg-[url('/light.svg')] dark:bg-[url('/dark.svg')] bg-cover bg-center bg-no-repeat transition-all duration-300">
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm z-0"></div>

      {/* Content (Ensuring it's above the blur effect) */}
      <div className="relative z-10">
        <MenuBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Desktop Icons */}
        <div className="pt-12 pl-8 flex flex-col space-y-6">
          {menuItems.map((item, index) => (
            <Folder
              key={item.id}
              item={item}
              isActive={activeWindow === item.id}
              onClick={() => toggleWindow(item.id)}
              initialPosition={getInitialPosition(index)}
            />
          ))}

          <Resume initialPosition={getInitialPosition(5)} />
        </div>

        {/* Windows */}
        {menuItems.map((item) => (
          <Window
            key={item.id}
            title={item.name}
            isOpen={activeWindow === item.id}
            onClose={() => setActiveWindow(null)}
            initialPosition={windowPosition}
          >
            {item.content}
          </Window>
        ))}
      </div>
    </div>
  );
}
