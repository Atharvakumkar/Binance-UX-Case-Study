import Heading from "./components/heading";
import Binance  from "./components/binance";
import Problem from "./components/bgandprb";
import Logo from "./components/logo";
import Improvement from "./components/improvement";
import Focus from "./components/focusareas";
import Rework from "./components/myRework";


function App() {
  return (
    <>
    <div className="bg-zinc-900">
    <Heading/>
    <Logo/>
    <Binance/>
    <Problem/>
    <Improvement/>
    <Focus/>
    </div>
    </>
  );
}

export default App;
