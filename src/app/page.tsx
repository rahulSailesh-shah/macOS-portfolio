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
  const [isMounted, setIsMounted] = useState(false);
  const [activeWindow, setActiveWindow] = useState<MenuItem["id"] | null>(
    "home"
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [windowPosition, setWindowPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    setWindowPosition({
      x: window.innerWidth / 2 - 500,
      y: window.innerHeight / 2 - 350,
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const toggleWindow = (id: MenuItem["id"]): void => {
    if (activeWindow === id) {
      setActiveWindow(null);
    } else {
      setActiveWindow(id);
      setWindowPosition({
        x: window.innerWidth / 2 - 500,
        y: window.innerHeight / 2 - 350,
      });
    }
  };

  const getInitialPosition = (index: number) => ({
    x: INITIAL_OFFSET.x,
    y: index * FOLDER_HEIGHT,
  });

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen bg-[url('/light.jpg')] dark:bg-[url('/dark.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-100">
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm z-0"></div>

      {/* Content (Ensuring it's above the blur effect) */}
      <div className="relative z-10">
        <MenuBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Desktop Icons */}
        <div className="pt-12 pr-8 flex flex-col space-y-6 items-end">
          {menuItems.map((item, index) => (
            <Folder
              key={item.id}
              item={item}
              isActive={activeWindow === item.id}
              onClick={() => toggleWindow(item.id)}
              initialPosition={getInitialPosition(index)}
            />
          ))}

          <Resume initialPosition={getInitialPosition(4)} />
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
