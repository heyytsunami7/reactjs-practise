import React from 'react'
import { useTransaction } from '../Context/Context'

function TransactionItem({tx}) {
  const {deleteTransaction} = useTransaction();
  return (
    <div>
      <p>{tx.desc}</p>
      <p>{tx.type === "income" ? "+" : "-"}₹{tx.amount}</p>
      <button onClick={()=>deleteTransaction(tx.id)}>X</button>
    </div>
  )
}

export default TransactionItem