import { useDispatch } from "react-redux";
import { managementSlice, type Transaction } from "../redux/managementSlice";

import { useState, type ChangeEvent } from "react";

export default function TransactionItem({ item }: { item: Transaction }) {
  const [isEditable, setEditable] = useState(false);
  const [Descinput, setDescInput] = useState<string>(item.description);
  const [amountInput, setAmountInput] = useState<number>(item.amount);
  const { removeFromList, editItem } = managementSlice.actions;
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-400 rounded-2xl w-1/2 mx-auto p-3 my-2">
      {isEditable ? (
        <div className="flex gap-2  justify-between items-center *:bg-white *:text-black *:rounded-sm *:p-2">
          <input
            type="text"
            defaultValue={item.description}
            onChange={(e: ChangeEvent) =>
              setDescInput((e.target as HTMLInputElement).value)
            }
          />
          <input
            type="number"
            defaultValue={item.amount}
            onChange={(e: ChangeEvent) =>
              setAmountInput(Number((e.target as HTMLInputElement).value))
            }
          />
          <button
            className="cursor-pointer"
            onClick={() => {
              setEditable(false);
              dispatch(
                editItem({
                  id: item.id,
                  newInfo: { description: Descinput, amount: amountInput },
                }),
              );
            }}
          >
            update
          </button>
        </div>
      ) : (
        <div className=" flex justify-between items-center *:capitalize">
          <h3>{item?.description}</h3>
          <p
            className={` ${item?.amount > 0 ? "text-green-600" : "text-red-500"}`}
          >
            {item?.amount}
          </p>
          <div className="flex gap-3">
            <button
              className="bg-green-500 p-2 px-4 rounded-full cursor-pointer"
              onClick={() => {
                setEditable(true);
              }}
            >
              Edit
            </button>
            <button
              className="bg-red-500 p-2 px-4 rounded-sm cursor-pointer"
              onClick={() => dispatch(removeFromList(item.id))}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
