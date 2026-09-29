import { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { managementSlice } from "../redux/managementSlice";
import { v4 as uuidv4 } from "uuid";
import Transaction from "./Transaction";
export default function Managment() {
  const [Descinput, setDescInput] = useState<string>("");
  const [amountInput, setAmountInput] = useState<number>(0);
  const dispatch = useDispatch();
  const { addToList } = managementSlice.actions;
  return (
    <form className="my-5 *:capitalize *:mx-auto *:mt-1" onSubmit={(e)=>e.preventDefault()}>
      Description:{" "}
      <input
        className="block bg-amber-50 text-black p-1 "
        type="text"
        value={Descinput}
        placeholder="enter Description"
        required
        onChange={(e: ChangeEvent): void =>
          setDescInput((e.target as HTMLInputElement).value)
        }
      />
      <br />
      Money:
      <input
        type="number"
        value={amountInput}
        className="block bg-amber-50 text-black p-1 mb-4"
        placeholder="enter numbers"
        required
        onChange={(e: ChangeEvent): void =>
          setAmountInput(Number((e.target as HTMLInputElement).value))
        }
      />
      <button
        className="cursor-pointer bg-red-600 rounded-xl  mt-90 p-2 px-4"
        onClick={() =>
          dispatch(
            addToList({
              id: uuidv4(),
              description: Descinput,
              amount: amountInput,
            }),
          )
        }
      >
        add transction
      </button>
      <Transaction/>
    </form>
  );
}
