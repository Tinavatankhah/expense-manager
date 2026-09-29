import { useSelector } from "react-redux";
import type { Management, Transaction } from "../redux/managementSlice";
import TransactionItem from "./TransactionItem";

export default function Transaction() {
  // const transactions = useSelector((state: Array<Management>) => state.transactions);
  // console.log(transactions.)
  return (
    <div>
      {transactions?.map((m) => (
        <TransactionItem key={m.id} {...m} />
      ))}
      <button>empty</button>
    </div>
  );
}
