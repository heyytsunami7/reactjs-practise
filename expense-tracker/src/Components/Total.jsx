import React from "react";
import { useTransaction } from "../Context/Context";

function Total() {
  const { transactions } = useTransaction();

  const Income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const Expenses = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const Balance = Income - Expenses;

  const hasIncome = Income > 0;
  const hasExpenses = Expenses > 0;

  return (
    <>
      <div className="w-full max-w-2xl mx-auto p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
        <div className="grid grid-cols-3 gap-3 text-center">
          
          {/* Income Card */}
          <div
            className={`p-3 rounded-xl border transition-colors ${
              hasIncome
                ? "bg-emerald-50/70 border-emerald-200"
                : "bg-slate-50/50 border-slate-200/60"
            }`}
          >
            <span
              className={`block text-xs font-bold uppercase tracking-wider ${
                hasIncome ? "text-emerald-700" : "text-slate-400"
              }`}
            >
              Income
            </span>
            <p
              className={`mt-1 text-lg font-bold font-mono ${
                hasIncome ? "text-emerald-700" : "text-slate-400"
              }`}
            >
              {hasIncome ? "+" : ""}₹{Income.toLocaleString()}
            </p>
          </div>

          {/* Expense Card */}
          <div
            className={`p-3 rounded-xl border transition-colors ${
              hasExpenses
                ? "bg-rose-50/70 border-rose-200"
                : "bg-slate-50/50 border-slate-200/60"
            }`}
          >
            <span
              className={`block text-xs font-bold uppercase tracking-wider ${
                hasExpenses ? "text-rose-700" : "text-slate-400"
              }`}
            >
              Expense
            </span>
            <p
              className={`mt-1 text-lg font-bold font-mono ${
                hasExpenses ? "text-rose-700" : "text-slate-400"
              }`}
            >
              {hasExpenses ? "-" : ""}₹{Expenses.toLocaleString()}
            </p>
          </div>

          {/* Balance Card */}
          <div
            className={`p-3 rounded-xl border transition-colors ${
              Balance > 0
                ? "bg-indigo-50/70 border-indigo-200 text-indigo-900"
                : Balance < 0
                ? "bg-rose-50/70 border-rose-200 text-rose-800"
                : "bg-slate-50/50 border-slate-200/60 text-slate-400"
            }`}
          >
            <span
              className={`block text-xs font-bold uppercase tracking-wider ${
                Balance !== 0 ? "opacity-80" : "text-slate-400"
              }`}
            >
              Balance
            </span>
            <p
              className={`mt-1 text-lg font-bold font-mono ${
                Balance === 0 ? "text-slate-400" : ""
              }`}
            >
              ₹{Balance.toLocaleString()}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Total;