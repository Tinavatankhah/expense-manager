import { useDispatch, useSelector } from "react-redux";
import {
  managementSlice,
  type Management,
  type Transaction,
} from "../redux/managementSlice";
import TransactionItem from "./TransactionItem";

export default function Transaction() {
  const { transactions } = useSelector((state: Management) => state);
  const { emptyList } = managementSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {transactions?.map((m) => (
          <TransactionItem key={m.id} item={m} />
        ))}
        {transactions.length > 0 && (
          <button
            className="cursor-pointer"
            onClick={() => dispatch(emptyList())}
          >
            empty
          </button>
        )}
      </div>
    </div>
  );
}
