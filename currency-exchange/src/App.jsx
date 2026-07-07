import { useState } from "react";
import InputBox from "./components/inputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-linear-to-br from-blue-50 via-white to-blue-200 bg-cover bg-no-repeat"
    >
      <div className="w-full px-4">
        
        <div className="w-full max-w-md mx-auto border border-white/50 rounded-2xl p-6 backdrop-blur-md bg-white/40 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

           
            <div className="relative w-full h-2 my-1">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full bg-blue-600 text-white px-4 py-1.5 font-semibold text-sm hover:bg-blue-700 active:scale-95 transition-all shadow-sm flex items-center justify-center"
                onClick={swap}
              >
                ⇅ Swap
              </button>
            </div>

            
            <div className="w-full mt-2 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold px-4 py-3.5 rounded-xl hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] transition-all shadow-md"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;