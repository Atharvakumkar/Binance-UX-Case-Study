import Heading from "./components/heading";
import Binance  from "./components/binance";
import Problem from "./components/bgandprb";
import Logo from "./components/logo";
import Improvement from "./components/improvement";

function App() {
  return (
    <>
    <div className="bg-zinc-900">
    <Heading/>
    <Logo/>
    <Binance/>
    <Problem/>
    <Improvement/>
    </div>
    </>
  );
}

export default App;
