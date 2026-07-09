import { useState } from "react";

function App() {
  const [newtodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);
  const AddTodo = () => {
    const todoObject = {
      id: list.length + 1,
      task: newtodo,
      status: false,
    };
    setList([...list, todoObject]);
    setNewTodo("");
  };

  const todostatus = (id) => {
    const updatedList = list.map((todoObject) => {
      if (todoObject.id === id) {
        return {
          ...todoObject,
          status: !todoObject.status,
        };
      }

      return todoObject;
    });
    setList(updatedList);
  };
  return (
    <>
      <div className="min-h-screen w-full bg-[#121110] flex items-center justify-center p-6">
        
        {/* Ticket Container */}
        <div className="w-full max-w-lg bg-[#1c1a18] px-8 py-10 shadow-2xl relative border-t-4 border-[#a34a17]">
          
          {/* Header */}
          <div className="flex items-baseline justify-between mb-2">
            <h1 
              className="text-3xl font-bold text-white tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Todo
            </h1>
            <span 
              className="text-sm text-[#70675b]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              #{String(list.length).padStart(3, '0')}
            </span>
          </div>
          
          <p 
            className="text-sm text-[#70675b] mb-6"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {list.length === 0 ? "nothing brewing yet" : "tasks in progress"}
          </p>

          {/* Double Separator Lines */}
          <div className="border-t-4 border-double border-[#332e27] mb-8" />

          {/* Input Form */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Add a task..."
              value={newtodo}
              id="todoitem"
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              className="flex-1 bg-[#0d0c0b] border border-[#332e27] px-4 py-3 text-sm text-[#e6e4e1] placeholder-[#5c554b] outline-none focus:border-[#a34a17] transition-colors"
            />
            <button 
              onClick={AddTodo}
              className="px-7 py-3 text-sm font-semibold text-white bg-[#a34a17] hover:bg-[#853a10] active:scale-95 transition-all shadow-md"
            >
              Add
            </button>
          </div>
          
          {/* List Area */}
          <div>    
            {list.length === 0 ? (
              // Empty State Box
              <div className="border border-dashed border-[#423b32] py-12 text-center bg-[#181614]">
                <p className="text-[#8f8576] mb-2 font-medium">Your list is empty.</p>
                <p 
                  className="text-xs text-[#5c554b]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  add your first task above
                </p>
              </div>
            ) : (
              // Active Tasks
              <ul className="flex flex-col gap-3">
                {list.map((todoObject) => {
                  return (
                    <li 
                      key={todoObject.id}
                      className="flex items-center gap-4 border border-[#332e27] bg-[#141211] px-5 py-4 transition-colors hover:border-[#5c554b]"
                    >
                      <label className="relative flex items-center justify-center shrink-0 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={todoObject.status}
                          onChange={() => todostatus(todoObject.id)}
                          className="peer sr-only"
                        />
                        <div className="h-5 w-5 border border-[#5c554b] peer-checked:bg-[#a34a17] peer-checked:border-[#a34a17] transition-all flex items-center justify-center">
                          {todoObject.status && (
                            <svg
                              className="h-3.5 w-3.5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </label>
                      <span
                        className={
                          todoObject.status
                            ? "text-sm text-[#5c554b] line-through decoration-[#5c554b]"
                            : "text-sm text-[#e6e4e1]"
                        }
                      >
                        {todoObject.task}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
