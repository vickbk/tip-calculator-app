import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/styles/global.css";
import "@/styles/scss/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ColorsHelper } from "./components/shared/ColorsHelper";

function App() {
  return (
    <>
      <ColorsHelper />
    </>
  );
}

export default App;
