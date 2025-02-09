import { motion } from "framer-motion";
import { MenuItem } from "@/types";

interface FolderProps {
  item: MenuItem;
  onClick: () => void;
}

export const Folder: React.FC<FolderProps> = ({ item, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center w-24 group bg-transparent border-none cursor-pointer"
    >
      <div className="relative">
        <div className="w-16 h-12 bg-blue-500/90 rounded-t-lg" />
        <div className="w-16 h-10 bg-blue-400/90 rounded-b-lg mt-[-2px]" />
        <div className="absolute top-0 left-2 w-6 h-2 bg-blue-500/90 rounded-t-lg" />
      </div>
      <span className="mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-900 text-center break-words">
        {item.name}
      </span>
    </motion.button>
  );
};
