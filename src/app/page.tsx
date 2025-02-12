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

  const calculateInitialPosition = () => {
    const width = window.innerWidth;
    if (width < 768) {
      // mobile
      return {
        x: 10,
        y: 60,
      };
    }
    return {
      x: window.innerWidth / 2 - 500,
      y: window.innerHeight / 2 - 350,
    };
  };

  useEffect(() => {
    setIsMounted(true);
    setWindowPosition(calculateInitialPosition());

    const handleResize = () => {
      setWindowPosition(calculateInitialPosition());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      setWindowPosition(calculateInitialPosition());
    }
  };

  const getInitialPosition = (index: number) => {
    const width = window.innerWidth;
    if (width < 768) {
      // mobile
      return {
        x: (index % 3) * (width / 3),
        y: Math.floor(index / 3) * FOLDER_HEIGHT + INITIAL_OFFSET.y,
      };
    }
    return {
      x: INITIAL_OFFSET.x,
      y: index * FOLDER_HEIGHT,
    };
  };

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen bg-[url('/light.jpg')] dark:bg-[url('/dark.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-100">
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <MenuBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Desktop Icons */}
        <div className="pt-12 pr-8 flex flex-wrap md:flex-col md:space-y-6 items-center md:items-end justify-center md:justify-start gap-4 md:gap-0">
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
