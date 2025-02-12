import { motion, useMotionValue } from "framer-motion";
import { MenuItem } from "@/types";
import { IoFolder, IoFolderOpen } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";

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
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const folderRef = useRef<HTMLDivElement>(null);

  // Use motion values for smooth dragging
  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);

  // Update constraints on mount and window resize
  useEffect(() => {
    const updateConstraints = () => {
      if (folderRef.current) {
        const folderWidth = folderRef.current.offsetWidth;
        const folderHeight = folderRef.current.offsetHeight;

        setConstraints({
          left: 0,
          right: window.innerWidth - folderWidth,
          top: 0,
          bottom: window.innerHeight - folderHeight,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  // Update position on resize for folders that might be out of bounds
  useEffect(() => {
    const handleResize = () => {
      const newX = Math.min(
        Math.max(position.x, constraints.left),
        constraints.right
      );
      const newY = Math.min(
        Math.max(position.y, constraints.top),
        constraints.bottom
      );

      setPosition({ x: newX, y: newY });
      x.set(newX);
      y.set(newY);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position, constraints]);

  // Update initial position when prop changes
  useEffect(() => {
    setPosition(initialPosition);
    x.set(initialPosition.x);
    y.set(initialPosition.y);
  }, [initialPosition]);

  return (
    <motion.div
      ref={folderRef}
      style={{
        position: "absolute",
        x,
        y,
        touchAction: "none",
      }}
      drag
      dragMomentum={false}
      dragConstraints={constraints}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event, info) => {
        setIsDragging(false);
        const newX = position.x + info.offset.x;
        const newY = position.y + info.offset.y;

        // Ensure the final position is within bounds
        setPosition({
          x: Math.min(Math.max(newX, constraints.left), constraints.right),
          y: Math.min(Math.max(newY, constraints.top), constraints.bottom),
        });
      }}
      className="touch-none"
    >
      <motion.button
        onClick={() => !isDragging && onClick()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center w-20 md:w-24 group bg-transparent border-none cursor-pointer"
      >
        {item.id === "home" ? (
          <p className="text-xl md:text-2xl text-[#2367af] dark:text-[#63adfc] font-extrabold font-vujahday">
            Rahul Shah
          </p>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-[#2367af] dark:text-[#63adfc] text-4xl md:text-5xl">
              {isActive ? <IoFolderOpen /> : <IoFolder />}
            </div>

            <span className="mt-1 text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-200 text-center break-words">
              {item.name}
            </span>
          </div>
        )}
      </motion.button>
    </motion.div>
  );
};
