import Heading from "./components/heading";
import Binance  from "./components/binance";
import Problem from "./components/bgandprb";
import Logo from "./components/logo";

function App() {
  return (
    <>
    <div className="bg-zinc-900">
    <Heading/>
    <Logo/>
    <Binance/>
    <Problem/>
    </div>
    </>
  );
}

export default App;