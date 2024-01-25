import { createContext } from "react";
export const themes = {
  light: {
    name: "light",
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: (e) => console.log(e),
});
export default ThemeContext;
