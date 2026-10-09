// import React from 'react'
import { useTheme } from "../../context/ThemeContext.jsx";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  // <div>
  //   Welcome to Home Page
  // </div>

  return (
    // 'bg-white text-slate-900' applies to light mode
    // 'dark:bg-slate-900 dark:text-white' overrides them in dark mode
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
      <div className="max-w-md text-center p-6 bg-slate-50 rounded-xl shadow-md dark:bg-slate-800">
        <h1 className="text-3xl font-bold mb-4">Tailwind Dark Mode Setup</h1>
        <p className="text-slate-600 mb-6 dark:text-slate-400">
          This UI automatically adapts to your selection using Tailwind CSS's
          class strategy.
        </p>

        <button
          onClick={toggleTheme}
          className="px-5 py-2.5 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-900"
        >
          {theme === "light" ? "🌙 Go Dark" : "☀️ Go Light"}
        </button>
      </div>
    </div>
  );
};

export default Home;
