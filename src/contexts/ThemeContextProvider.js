import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    ligthTheme: {
      bgColor: "#fefefe",
      color: "#111",
    },
    darkTheme: {
      bgColor: "#333",
      color: "#eee",
    },
  });

  useEffect(() => {
    let localTheme = localStorage.getItem("Theme");
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    let newTheme = { ...theme };
    newTheme.isLightTheme = !newTheme.isLightTheme;
    setTheme(newTheme);
  };

  const themeDatas = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeDatas}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
