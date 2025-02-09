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
}

export interface Position {
  x: number;
  y: number;
}
