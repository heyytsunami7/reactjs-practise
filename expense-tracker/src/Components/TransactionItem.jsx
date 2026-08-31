import React from 'react'
import { useTransaction } from '../Context/Context'

function TransactionItem({ tx }) {
  const { deleteTransaction } = useTransaction();
  const isIncome = tx.type === "income";

  return (
    <div
      className={`flex items-center justify-between p-3.5 bg-white border rounded-xl shadow-sm transition-all ${
        isIncome
          ? "border-emerald-100 hover:border-emerald-200"
          : "border-rose-100 hover:border-rose-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md ${
            isIncome
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {isIncome ? "Income" : "Expense"}
        </span>
        <p className="text-sm font-medium text-slate-800">{tx.desc}</p>
      </div>

      <div className="flex items-center gap-3.5">
        <p
          className={`text-sm font-bold font-mono ${
            isIncome ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {isIncome ? "+" : "-"}₹{Number(tx.amount).toLocaleString()}
        </p>
        <button
          onClick={() => deleteTransaction(tx.id)}
          className="w-6 h-6 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;