import { useDispatch, useSelector } from "react-redux";
import {
  managementSlice,
  type Management,
  type Transaction,
} from "../redux/managementSlice";
import TransactionItem from "./TransactionItem";
import Search from "./Search";

export default function Transaction() {
  const { transactions } = useSelector((state: Management) => state);
  const { emptyList } = managementSlice.actions;
  const dispatch = useDispatch();

  return (
    <>
      {transactions.length > 0 && (
        <div className="bg-gray-100 pt-2">
          <Search />
          <div>
            {transactions?.map((m) => (
              <TransactionItem key={m.id} item={m} />
            ))}

            <button
              className="cursor-pointer bg-black rounded-full p-2 m-2"
              onClick={() => dispatch(emptyList())}
            >
              empty
            </button>
          </div>
        </div>
      )}
    </>
  );
}
