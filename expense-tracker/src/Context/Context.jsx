import { useContext } from "react";
import { createContext } from "react";

export const TransactionContext = createContext({
    transactions: [
        {
            id: 1,
            desc: "Transaction description",
            amount: 100,
            type : "income",
        },
    ],
    addTransaction: (tx) => {},
    deleteTransaction: (id) => {},
});

export const useTransaction = () => {
    return useContext(TransactionContext);
}

export const TransactionProvider = TransactionContext.Provider