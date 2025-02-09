"use client";

import { useState } from "react";
import { MenuItem } from "@/types";
import { Folder } from "@/components/desktop/Folder";
import { Window } from "@/components/desktop/Window";
import { MenuBar } from "@/components/desktop/MenuBar";
import { menuItems } from "@/constants/menu-items";

export default function Home() {
  const [activeWindow, setActiveWindow] = useState<MenuItem["id"] | null>(null);

  const toggleWindow = (id: MenuItem["id"]): void => {
    if (activeWindow === id) {
      setActiveWindow(null);
    } else {
      setActiveWindow(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <MenuBar />

      {/* Desktop Icons */}
      <div className="pt-12 pl-8 flex flex-col space-y-6">
        {menuItems.map((item) => (
          <Folder
            key={item.id}
            item={item}
            onClick={() => toggleWindow(item.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {menuItems.map((item) => (
        <Window
          key={item.id}
          title={item.name}
          isOpen={activeWindow === item.id}
          onClose={() => setActiveWindow(null)}
        >
          {item.content}
        </Window>
      ))}
    </div>
  );
}
