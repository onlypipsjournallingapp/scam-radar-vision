
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    updateDocumentClass(isDark);
  }, []);

  // Update the document class when theme changes
  const updateDocumentClass = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateDocumentClass(newDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="glass-button p-2 rounded-full hover:scale-105 transition-all"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
