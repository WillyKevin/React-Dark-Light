import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { Form } from "./components/Form";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toogleTheme = () => {
    setTheme(corr => (corr === "light" ? "dark" : "light"));
  }
  return (
    <div className="App" id={theme}>
      <Form />
      <br/>
      <br/>
      <ReactSwitch onChange={toogleTheme} checked={theme === "dark"} />
    </div>
  )
}

export default App
