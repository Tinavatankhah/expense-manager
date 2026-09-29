import { useDispatch } from "react-redux";
import { managementSlice, type Transaction } from "../redux/managementSlice";

export default function TransactionItem({ item }: { item: Transaction }) {
  const { removeFromList } = managementSlice.actions;
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-400 rounded-2xl w-1/2 mx-auto p-3 my-2 flex justify-between items-center">
      <h3>{item?.description}</h3>
      <p className={` ${item?.amount > 0 ? "text-green-300" : "text-red-500"}`}>
        {item?.amount}
      </p>
      <button
        className="bg-red-500 p-2 px-4 rounded-full cursor-pointer"
        onClick={() => dispatch(removeFromList(item.id))}
      >
        X
      </button>
    </div>
  );
}
