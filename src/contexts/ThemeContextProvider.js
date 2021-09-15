import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: false,
    ligthTheme: {
      bgColor: "#fafafa",
      color: "#111",
    },
    darkTheme: {
      bgColor: "#333",
      color: "#eee",
    },
  });

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
