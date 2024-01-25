const Avatar = () => {
  return (
    <div className="flex align-center items-center">
      <div>
        <img
          width={50}
          height={50}
          className="rounded-full"
          src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        />
      </div>
      <div className="text-sm leading-5 text-left pl-2">
        <div>Manjunath Kalburgi</div>
        <div>Technical Architect</div>
      </div>
    </div>
  );
};
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
export default function sidebar() {
  const menus = ["profile", "dashboard", "saved jobs"];
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <div className="logo"></div>
      <button
        onClick={toggleTheme(theme.name)}
        style={{ backgroundColor: theme.background }}
      >
        Toggle Theme
      </button>
      <div className="p-2">
        <Avatar />
      </div>
      <div className="menus text-left ">
        {menus &&
          menus.map((item) => {
            return (
              <div
                className="hover:border-pink-200 capitalize border-2 border-white hover:border-2 hover:text-pink-300"
                key={item}
              >
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
}
