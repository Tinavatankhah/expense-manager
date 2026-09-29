import { useSelector } from "react-redux";
import Managment from "./components/Managment";
import type { Management } from "./redux/managementSlice";

function App() {
  const { balance, income, expense,transactions } = useSelector((state:Management) => state);
  console.log(transactions)
  return (
    <div className="bg-black p-10 text-amber-50 capitalize">
      <h1 className="text-5xl mb-6">expense tracker</h1>
      <h2 className="text-2xl">balance:${balance}</h2>
      <p className="text-xl">income:${income}</p>
      <p className="text-xl">expense:${expense}</p>
      <Managment />
    </div>
  );
}

export default App;
