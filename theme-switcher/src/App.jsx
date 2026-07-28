import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <>
      <div className={theme ? "bg-orange-200" : "bg-gray-700"}>
      {theme ? <h1>Light theme</h1> : <h1>Dark Theme</h1>}</div>
      <button className="box-border border hover:bg-brand-strong focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={()=>setTheme(!theme)}>{theme ? "switch to Dark" : "switch to Light"}</button>
    </>
  );
}

export default App;
