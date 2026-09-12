import { useEffect, useState } from "react";
import TransactionForm from "./Components/TransactionForm";
import Total from "./Components/Total";
import TransactionItem from "./Components/TransactionItem";
import { TransactionProvider } from "./Context/Context";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [...prev, tx]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("transactions"));
    if (stored && stored.length > 0) {
      setTransactions(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-50/40 to-slate-100/60 py-10 px-4 text-slate-900 antialiased">
      <div className="max-w-2xl mx-auto space-y-5">
        <TransactionProvider value={{ transactions, addTransaction, deleteTransaction }}>
          {/* Header */}
          <div className="text-center space-y-1 pb-1">
            <h1 className="text-2xl font-extrabold tracking-tight text-indigo-950">
              Expense Tracker
            </h1>
            <p className="text-xs font-medium text-slate-500">
              Track your income and spending in one place
            </p>
          </div>

          {/* Stats Overview */}
          <Total />

          {/* Form */}
          <TransactionForm />

          {/* List */}
          <div className="space-y-2 pt-2">
            {transactions.length === 0 ? (
              <div className="py-10 text-center rounded-2xl border border-dashed border-slate-200 bg-white/50">
                <p className="text-sm font-medium text-slate-400">
                  No records yet. Add a transaction above!
                </p>
              </div>
            ) : (
              transactions.map((tx) => (
                <TransactionItem key={tx.id} tx={tx} />
              ))
            )}
          </div>
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;