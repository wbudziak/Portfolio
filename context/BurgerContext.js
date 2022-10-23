import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider(props) {
  const [changeTheme, setChangeTheme] = useState(false);
  const toggleTheme = () => {
    setChangeTheme(!changeTheme);
  };

  const [test, setTest] = useState(false);

  return (
    <ThemeContext.Provider value={changeTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {props.children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
