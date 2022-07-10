import React, { useEffect } from "react";
import { useState } from "react";
import getRandomNumber from "../../utils/getRandomNumber";

import DataBar from "./DataBar";
import "./style.css";

const SortingVisualizer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    resetData();
  }, []);
  const resetData = () => {
    const randomData = [];
    for (let i = 0; i < 100; i++) {
      randomData.push(getRandomNumber(5, 700));
    }
    setData(randomData);
  };
  return (
    <div>
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="">
            <button
              onClick={resetData}
              class="bg-cyan-500 hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="relative w-full py-6 mx-auto sm:px-6 lg:px-8">
          {/* Replace with your content */}

          <div className="absolute left-0 right-0 ml-auto mr-auto text-center data-container">
            {data.map((value, index) => (
              <DataBar value={value} key={index} />
            ))}
          </div>

          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default SortingVisualizer;
