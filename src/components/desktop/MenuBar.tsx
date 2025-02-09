export const MenuBar: React.FC = () => {
  return (
    <div className="bg-gray-100/80 backdrop-blur-sm h-8 fixed top-0 left-0 right-0 border-b border-gray-200 flex items-center px-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
    </div>
  );
};
