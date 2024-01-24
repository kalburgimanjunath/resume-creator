import { Footer, Header, Sidebar, Content } from "./components";
import "./styles.css";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";
export default function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className="App grid grid-cols-2">
      <ThemeContext.Provider value={theme}>
        <Sidebar />
      </ThemeContext.Provider>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
