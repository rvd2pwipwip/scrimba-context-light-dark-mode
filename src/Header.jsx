import React from "react";
import { ThemeContext } from "./App";

const Header = () => {
  const { theme } = React.useContext(ThemeContext);

  const capitalizeFirstChar = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  };

  return (
    <header className={`${theme}-theme`}>
      <h1>{`${capitalizeFirstChar(theme)} Theme`}</h1>
    </header>
  );
};

export default Header;
