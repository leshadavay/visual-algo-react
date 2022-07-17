import React, { useEffect } from "react";
import { useState } from "react";
import { mergeSort } from "../../algorithms/sorting";
import getRandomNumber from "../../utils/getRandomNumber";
import "./style.css";

const ANIMATION_SPEED = 10;
const BAR_COUNT = 100;
const BAR_MAX_HEIGHT = 600;

const SortingVisualizer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleResetData();
  }, []);
  const handleResetData = () => {
    const randomData = [];
    for (let i = 0; i < BAR_COUNT; i++) {
      randomData.push(getRandomNumber(5, BAR_MAX_HEIGHT));
    }
    setData(randomData);
  };

  const handleMergeSort = () => {
    const [merged, animations] = mergeSort(data);
    const bars = document.getElementsByClassName("data-bar");

    for (let i = 0; i < animations.length; i++) {
      const [left, right] = animations[i];
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const leftBar = bars[left];
        const rightBar = bars[right];
        const colorSwap = i % 3 === 0 ? true : false;

        setTimeout(() => {
          if (colorSwap) {
            leftBar.classList.remove(
              "from-indigo-500",
              "via-purple-500",
              "to-pink-500"
            );
            leftBar.classList.add("from-cyan-500", "to-blue-500");

            rightBar.classList.remove(
              "from-indigo-500",
              "via-purple-500",
              "to-pink-500"
            );
            rightBar.classList.add("from-cyan-500", "to-blue-500");
          } else {
            leftBar.classList.remove("from-cyan-500", "to-blue-500");
            leftBar.classList.add(
              "from-indigo-500",
              "via-purple-500",
              "to-pink-500"
            );

            rightBar.classList.remove("from-cyan-500", "to-blue-500");
            rightBar.classList.add(
              "from-indigo-500",
              "via-purple-500",
              "to-pink-500"
            );
          }
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          bars[barOneIndex].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  };
  const handleQuickSort = () => {};
  const handleHeapSort = () => {};
  const handleBubbleSort = () => {};

  return (
    <div>
      <header className="shadow bg-sky-900">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={handleResetData}
              className="px-3 py-2 text-sm font-medium rounded-md bg-cyan-500 hover:bg-cyan-600"
            >
              Reset Data
            </button>
            <button
              onClick={handleMergeSort}
              className="px-3 py-2 text-sm font-medium rounded-md bg-cyan-500 hover:bg-cyan-600"
            >
              Merge Sort
            </button>
            <button
              onClick={handleQuickSort}
              className="px-3 py-2 text-sm font-medium rounded-md bg-cyan-500 hover:bg-cyan-600"
            >
              Quick Sort
            </button>
            <button
              onClick={handleHeapSort}
              className="px-3 py-2 text-sm font-medium rounded-md bg-cyan-500 hover:bg-cyan-600"
            >
              Heap Sort
            </button>
            <button
              onClick={handleBubbleSort}
              className="px-3 py-2 text-sm font-medium rounded-md bg-cyan-500 hover:bg-cyan-600"
            >
              Bubble Sort
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="relative w-full py-6 mx-auto sm:px-6 lg:px-8">
          <div className="absolute left-0 right-0 ml-auto mr-auto text-center data-container">
            {data.map((value, index) => (
              <div
                key={index}
                className="inline-block w-2 mr-1 rounded-md data-bar bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500"
                style={{ height: `${value}px`, width: "0.5%" }}
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SortingVisualizer;
