import { useState } from "react";

//singleton class
class ThemeManager {
    private static instance: ThemeManager; // The single instance
    public theme: string;
   
    private constructor() {
      this.theme = "light"; // Default theme
    }
   
    static getInstance() {
      if (!ThemeManager.instance) {
        ThemeManager.instance = new ThemeManager(); // Create the instance if it doesn't exist
      }
      return ThemeManager.instance; // Return the single instance
    }
   
    setTheme(newTheme: string) {
      this.theme = newTheme;
    }
   
    getTheme() {
      return this.theme;
    }
  }
   
  const SetTheme: React.FC = () => {
    const themeManager = ThemeManager.getInstance();
    const [currentTheme, setCurrentTheme] = useState(themeManager.getTheme());

    const changeTheme = (newTheme: string) => {
        themeManager.setTheme(newTheme); // Update the theme in ThemeManager
        setCurrentTheme(newTheme); // Trigger a re-render
      };
   
    return (
  <div>
  <h1>Current Theme: {themeManager.getTheme()}</h1>
  <button onClick={() => changeTheme("dark")}>
          Change to Dark Theme
  </button>
  </div>
    );
  };


  export default SetTheme;