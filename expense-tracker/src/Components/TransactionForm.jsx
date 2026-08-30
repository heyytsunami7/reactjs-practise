import React, { useState } from "react";
import { useTransaction } from "../Context/Context";

function TransactionForm() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const {addTransaction } = useTransaction();
  const add = (e) => {
      e.preventDefault();
      if (!desc.trim() || !amount ) return;
      
      addTransaction({
        id: Date.now(),
        desc,
        amount: Number(amount),
        type,
      });
  };
  return (
    <div>
      <form onSubmit={add}>
        <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
        <input type="number" value={amount}  onChange={(e)=>setAmount(e.target.value)}/>
        <select name="type" id="" value={type} onChange={(e)=>setType(e.target.value)}>
          <option value="">Income</option>
          <option value="">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;
