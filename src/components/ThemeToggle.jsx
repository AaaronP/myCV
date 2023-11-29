import MoonIcon from '../icons/MoonIcon.jsx'
import SunIcon from '../icons/SunIcon.jsx'
import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <button onClick={handleClick}>{theme === "light" ? <SunIcon/> : <MoonIcon/>}</button>
  )
}