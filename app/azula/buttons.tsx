import React from "react";

const AzulaButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Get Azula
      </button>
      <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
        Become a Distributor
      </button>
    </div>
  );
};

export default AzulaButtons;
