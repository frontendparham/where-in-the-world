import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";

console.log("s");

export default function App() {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  function handleSetTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.className = `theme--${theme}`;
  }, [theme]);

  useEffect(function () {
    async function getCountries() {
      try {
        setIsLoading(true);

        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (!response.ok)
          throw new Error(`${data.message} (${response.status})`);

        setCountries(data);
        setIsLoading(false);
      } catch (err) {
        alert(`there was a problem to getting data: ${err.message}`);
      }
    }
    getCountries();
  }, []);

  return (
    <div className={`app theme--${theme}`}>
      <Header theme={theme} onSetTheme={handleSetTheme} />
      <Main
        isLoading={isLoading}
        countries={countries}
        setCountries={setCountries}
      />
    </div>
  );
}
