import { motion } from "framer-motion";
import { MenuItem } from "@/types";
import { TiFolder, TiFolderOpen } from "react-icons/ti";
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
          <p className="text-2xl text-[#386641] dark:text-[#aad576] font-extrabold font-vujahday">
            Rahul Shah
          </p>
        ) : (
          <div>
            <div className="text-[#386641] dark:text-[#aad576] text-6xl">
              {isActive ? <TiFolderOpen /> : <TiFolder />}
            </div>

            <span className="mt-1 text-sm font-medium text-[#386641] dark:text-[#aad576] group-hover:text-[#386641] dark:group-hover:text-[#aad576] text-center break-words">
              {item.name}
            </span>
          </div>
        )}
      </motion.button>
    </motion.div>
  );
};
