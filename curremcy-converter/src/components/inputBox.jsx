import { React, useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "", // Added so you can pass external classes (like margin) if needed
}) {
    const amountid = useId();

    return (
        <div className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between ${className}`}>
            
            {/* Left Side: Amount Input */}
            <div className="w-1/2 flex flex-col gap-1.5">
                <label 
                    htmlFor={amountid} 
                    className="text-gray-500 text-sm font-medium cursor-pointer"
                >
                    {label}
                </label>
                <input
                    id={amountid}
                    value={amount}
                    type="number"
                    placeholder="0"
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent text-lg font-semibold text-gray-800 disabled:text-gray-400 placeholder:text-gray-300 transition-all"
                />
            </div>

            {/* Right Side: Currency Selector */}
            <div className="w-1/2 flex flex-col items-end gap-1.5 text-right">
                <p className="text-gray-500 text-sm font-medium">Currency Type</p>
                <select 
                    value={selectCurrency} 
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
                    className="rounded-lg px-3 py-1.5 bg-gray-100 text-gray-800 font-medium cursor-pointer outline-none hover:bg-gray-200 focus:ring-2 focus:ring-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
            
        </div>
    );
}

export default InputBox;    