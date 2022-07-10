import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SortingVisualizer from "./components/SortingVisualizer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="h-screen App bg:blue-500 dark:bg-slate-900">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <SortingVisualizer />
      </NavBar>
    </div>
  );
}

export default App;
