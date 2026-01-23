import logo from "@/assets/logo.svg";
import "@/styles/global.css";
import "@/styles/scss/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SplitCalculator } from "./components/app/split-calculator";
import { Heading, Main } from "./components/shared/heading-managers";
import { HeadingCtx } from "./contexts/HeadingCtx";

function App() {
  return (
    <HeadingCtx value={0}>
      <header>
        <img src={logo} alt="" />
        <Heading className="sr-only">Tip Calculator App</Heading>
      </header>
      <Main pageHasH1>
        <SplitCalculator />
      </Main>
    </HeadingCtx>
  );
}

export default App;
