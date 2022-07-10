import React from "react";
import { useState } from "react";

const SortingVisualizer = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default SortingVisualizer;
