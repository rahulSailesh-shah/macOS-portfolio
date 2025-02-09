// components/Window.tsx
import { WindowProps } from "@/types";
import React from "react";

export const Window: React.FC<WindowProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] max-h-[80vh] bg-white/80 backdrop-blur-sm rounded-lg shadow-xl">
      <div className="bg-gray-100 rounded-t-lg border-b border-gray-200 p-3 flex items-center">
        <div className="flex space-x-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto font-medium text-gray-600">{title}</div>
      </div>

      <div className="p-6 overflow-auto max-h-[calc(80vh-4rem)]">
        {children}
      </div>
    </div>
  );
};
