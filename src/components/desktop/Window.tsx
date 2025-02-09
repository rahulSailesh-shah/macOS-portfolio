import { WindowProps } from "@/types";
import React, { useState, useRef, useEffect, useCallback } from "react";

export const Window: React.FC<WindowProps> = ({
  title,
  isOpen,
  onClose,
  children,
  initialPosition,
}) => {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setPosition(initialPosition);
    }
  }, [isOpen, initialPosition]);

  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    },
    [dragging, offset]
  );

  const stopDrag = () => setDragging(false);

  useEffect(() => {
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    };
  }, [dragging, onDrag]);

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="fixed bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl w-[800px] max-h-[80vh] border dark:border-gray-700"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
      }}
    >
      {/* Draggable Header */}
      <div
        className="cursor-move bg-gray-100 dark:bg-gray-900 rounded-t-lg border-b border-gray-200 dark:border-gray-700 p-3 flex items-center"
        onMouseDown={startDrag}
      >
        <div className="flex space-x-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="mx-auto font-medium text-gray-600 dark:text-gray-300">
          {title}
        </div>
      </div>

      {/* Window Content */}
      <div className="p-6 overflow-auto max-h-[calc(80vh-4rem)] text-gray-800 dark:text-gray-200">
        {children}
      </div>
    </div>
  );
};
