import { Sun, Moon } from "@phosphor-icons/react";

export default function Header({ theme, onSetTheme }) {
  const isDarkMode = theme === "dark";

  return (
    <header className="header">
      <div className="header__logo">
        <h1>Where in the world?</h1>
      </div>
      <div className="header__toggle-dark-mode">
        <button onClick={onSetTheme}>
          {isDarkMode ? <Sun size="2.2rem" /> : <Moon size="2.2rem" />}

          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </button>
      </div>
    </header>
  );
}
