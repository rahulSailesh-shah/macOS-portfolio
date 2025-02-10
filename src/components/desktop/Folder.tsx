import { motion } from "framer-motion";
import { MenuItem } from "@/types";
import { IoFolder, IoFolderOpen } from "react-icons/io5";
import { useState } from "react";

interface FolderProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
  initialPosition?: { x: number; y: number };
}

export const Folder: React.FC<FolderProps> = ({
  item,
  isActive,
  onClick,
  initialPosition = { x: 0, y: 0 },
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      initial={{ x: position.x, y: position.y }}
      style={{ position: "absolute" }}
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event, info) => {
        setIsDragging(false);
        setPosition({
          x: position.x + info.offset.x,
          y: position.y + info.offset.y,
        });
      }}
      className="touch-none"
    >
      <motion.button
        onClick={() => !isDragging && onClick()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center w-24 group bg-transparent border-none cursor-pointer"
      >
        {item.id === "home" ? (
          <p className="text-2xl text-[#2367af] dark:text-[#63adfc] font-extrabold font-vujahday">
            Rahul Shah
          </p>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-[#2367af] dark:text-[#63adfc] text-5xl">
              {isActive ? <IoFolderOpen /> : <IoFolder />}
            </div>

            <span className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-200 text-center break-words">
              {item.name}
            </span>
          </div>
        )}
      </motion.button>
    </motion.div>
  );
};
