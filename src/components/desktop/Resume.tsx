import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { motion } from "framer-motion";

interface ResumeProps {
  initialPosition?: { x: number; y: number };
}

export const Resume: React.FC<ResumeProps> = ({
  initialPosition = { x: 0, y: 0 },
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    if (!isDragging) {
      window.open("/Rahul_Shah_SDE_Resume.pdf", "_blank");
    }
  };

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
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center w-24 cursor-pointer group bg-transparent"
      >
        <FaFilePdf className="text-5xl text-slate-700 dark:text-gray-300" />

        <span className="mt-1 text-sm text-slate-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 text-center break-words">
          Resume
        </span>
      </motion.div>
    </motion.div>
  );
};
