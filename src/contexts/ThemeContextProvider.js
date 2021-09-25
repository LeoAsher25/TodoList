import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    ligthTheme: {
      bgColor: "#f2f2f2",
      color: "#111",
      bgColorBtn: "#83D8FF",
    },
    darkTheme: {
      bgColor: "#333",
      color: "#eee",
      bgColorBtn: "#749DD6",
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
