import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useSwitchPage() {
  return useContext(ThemeContext);
}
export function useSwitchPageUpdate() {
  return useContext(ThemeUpdateContext);
}
export function SwitchPageAnimationProvider(props) {
  const [switchPage, setSwitchPage] = useState(false);

  const toggleValue = () => {
    setSwitchPage(true);
    setTimeout(() => {
      setSwitchPage(false);
    }, 600);
  };
  return (
    <ThemeContext.Provider value={switchPage}>
      <ThemeUpdateContext.Provider value={toggleValue}>
        {props.children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
