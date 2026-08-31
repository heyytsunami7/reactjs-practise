import React, { useState } from "react";
import { useTransaction } from "../Context/Context";

function TransactionForm() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const { addTransaction } = useTransaction();
  const add = (e) => {
    e.preventDefault();
    if (!desc.trim() || !amount) return;

    addTransaction({
      id: Date.now(),
      desc,
      amount: Number(amount),
      type,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-2 bg-white border border-slate-100 rounded-2xl shadow-md">
      <form onSubmit={add} className="flex flex-wrap sm:flex-nowrap items-center gap-2">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="flex-1 min-w-[140px] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-28 px-3.5 py-2.5 text-sm font-mono text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
        <select
          name="type"
          id=""
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={`px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border outline-none cursor-pointer transition-all ${
            type === "income"
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-rose-50 text-rose-700 border-rose-200"
          }`}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button
          type="submit"
          className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-xl shadow-md shadow-indigo-200 transition-all cursor-pointer whitespace-nowrap"
        >
          + Add
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;