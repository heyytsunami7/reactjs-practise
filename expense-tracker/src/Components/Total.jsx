import React from "react";
import { useTransaction } from "../Context/Context";

function Total() {
  const {transactions} = useTransaction();

  const Balance = Income - Expenses;
  return (
    <>
      <div>
        <p>Income : {Income}</p>
        <p>Expense: {Expenses}</p>
        <p>Balance: {Balance}</p>
      </div>
    </>
  );
}

export default Total;
