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
      className={`fixed bg-gray-100  dark:bg-[#121212] backdrop-blur-sm rounded-lg shadow-xl border dark:border-[#575757] ${
        title === "Home" ? "w-[900px]" : "w-[1100px]"
      }`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
        maxHeight: "85vh",
        overflow: "auto",
      }}
    >
      {/* Draggable Header */}
      <div
        className="cursor-grab bg-white dark:bg-[#282828] rounded-t-lg border-b border-gray-200 dark:border-[#575757] p-2 flex items-center sticky top-0"
        onMouseDown={startDrag}
      >
        <div className="flex space-x-2 cursor-default">
          <button
            onClick={onClose}
            className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Window Content Container */}
      <div className="p-8 text-gray-600 dark:text-gray-200 text-lg">
        {children}
      </div>
    </div>
  );
};
