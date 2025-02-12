import { useState, useEffect } from "react";
import { SiDarkreader } from "react-icons/si";
import { IoMdFlashlight } from "react-icons/io";

interface MenuBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setDateTime(formattedDateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/80 dark:bg-[#282828]/80 backdrop-blur-sm h-8 fixed top-0 left-0 right-0 border-b border-gray-200 dark:border-gray-700 flex items-center px-2 md:px-4 z-20">
      {/* Left side: macOS style window controls */}
      <div className="hidden md:flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-600" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-600" />
        <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-600" />
      </div>

      {/* Right side: Date, Time, and Dark Mode Toggle */}
      <div className="ml-auto text-gray-600 dark:text-gray-300 text-xs md:text-sm justify-center items-center flex space-x-4">
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-colors"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <IoMdFlashlight size={16} />
          ) : (
            <SiDarkreader size={16} />
          )}
        </button>

        <span>{dateTime.replace(",", "")}</span>
      </div>
    </div>
  );
};
