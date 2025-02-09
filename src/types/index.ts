export interface MenuItem {
  id: "projects" | "experience" | "about" | "contact";
  name: string;
  content: React.ReactNode;
}

export interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
}

export interface Position {
  x: number;
  y: number;
}
