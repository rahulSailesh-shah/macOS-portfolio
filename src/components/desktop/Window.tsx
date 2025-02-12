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
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (windowRef.current) {
        setWindowDimensions({
          width: windowRef.current.offsetWidth,
          height: windowRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [isOpen]);

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

      // Calculate new position
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      // Get window boundaries
      const maxX = window.innerWidth - windowDimensions.width;
      const maxY = window.innerHeight - windowDimensions.height;

      // Constrain position within viewport
      const boundedX = Math.min(Math.max(0, newX), maxX);
      const boundedY = Math.min(Math.max(0, newY), maxY);

      setPosition({
        x: boundedX,
        y: boundedY,
      });
    },
    [dragging, offset, windowDimensions]
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
      className={`fixed bg-gray-100 dark:bg-[#121212] backdrop-blur-sm rounded-lg shadow-xl border dark:border-[#575757]
        ${title === "Home" ? "w-[90vw] md:w-[900px]" : "w-[95vw] md:w-[1100px]"}
        ${dragging ? "cursor-grabbing" : ""}`}
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
        className={`cursor-grab bg-white dark:bg-[#282828] rounded-t-lg border-b
          border-gray-200 dark:border-[#575757] p-2 flex items-center justify-between
          sticky top-0 ${dragging ? "cursor-grabbing" : ""}`}
        onMouseDown={startDrag}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          startDrag({
            clientX: touch.clientX,
            clientY: touch.clientY,
          } as React.MouseEvent<HTMLDivElement>);
        }}
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
      <div className="p-4 md:p-8 text-gray-600 dark:text-gray-200 text-base md:text-lg">
        {children}
      </div>
    </div>
  );
};
