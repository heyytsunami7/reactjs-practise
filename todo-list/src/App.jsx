import { useState } from "react";

function App() {
  const [newtodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [editingid, setEditingid] = useState("");
  const [edittext, setEdittext] = useState(null);

  const AddTodo = () => {
    if (newtodo.trim() === "") {
      setError("please enter a task");
      return;
    } else {
      const todoObject = {
        id: list.length + 1,
        task: newtodo,
        status: false,
      };
      setList([...list, todoObject]);
      setError("");
      setNewTodo("");
    }
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

  const deletetodo = (id) => {
    const updatedList = list.filter((todoObject) => {
      if (todoObject.id === id) {
        return todoObject.id !== id;
      }
    });
    setList(updatedList);
  };

  const edtitodo = (id) => {
    setEditingid(id);
    const editing = list.find((todoObject) => {
      return todoObject.id === id;
    });
    setEdittext(editing.task);
  };

  const savedtodo = () => {
    const updatedList = list.map((todoObject) => {
      if (todoObject.id === editingid) {
        return {
          ...todoObject,
          task: edittext,
        };
      }
      return todoObject;
    });

    setList(updatedList);
    setEditingid(null);
    setEdittext("");
  };
  const cancelEdit = () => {
  setEditingid(null);
  setEdittext("");
};
  return (
    <>
      <div className="font-body min-h-screen bg-stone-950 text-stone-100 flex justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <div className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900 shadow-2xl">
            <div className="p-8">
              <p className="text-center text-xs font-medium uppercase tracking-widest text-amber-500">
                Daily Focus
              </p>
              <h1 className="font-display mt-2 text-center text-5xl font-semibold leading-none text-amber-100">
                Todo List
              </h1>
 
              <div className="mt-8 flex gap-2">
                <input
                  type="text"
                  placeholder="add todo"
                  value={newtodo}
                  id="todoitem"
                  onChange={(e) => {
                    setNewTodo(e.target.value);
                  }}
                  className="flex-1 rounded-xl border border-stone-700 bg-stone-950 px-4 py-2.5 text-stone-100 placeholder-stone-600 outline-none transition-colors focus:border-amber-500"
                />
                <button
                  onClick={AddTodo}
                  className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-5 py-2.5 font-medium text-stone-950 transition-colors hover:bg-amber-400 active:bg-amber-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add
                </button>
              </div>
              {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
 
              <ul className="mt-6 space-y-3">
                {list.map((todoObject) => {
                  return (
                    <li
                      key={todoObject.id}
                      className={`flex items-center gap-3 rounded-xl border bg-stone-950 px-4 py-3 transition-colors ${
                        todoObject.status
                          ? "border-amber-800"
                          : "border-stone-800"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={todoObject.status}
                        onChange={() => todostatus(todoObject.id)}
                        className="todo-checkbox"
                      />
                      {editingid === todoObject.id ? (
                        <>
                          <input
                            type="text"
                            value={edittext}
                            onChange={(e) => setEdittext(e.target.value)}
                            className="flex-1 rounded-lg border border-amber-600 bg-stone-900 px-3 py-1.5 text-stone-100 outline-none"
                          />
                          <button
                            onClick={savedtodo}
                            className="rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-400"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="rounded-lg border border-stone-700 px-3 py-1.5 text-sm text-stone-400 transition-colors hover:bg-stone-800"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <span
                            className={`flex-1 ${
                              todoObject.status
                                ? "text-stone-500 line-through"
                                : "text-stone-100"
                            }`}
                          >
                            {todoObject.task}
                          </span>
                          <button
                            onClick={() => edtitodo(todoObject.id)}
                            className="flex items-center gap-1 rounded-lg border border-stone-700 px-3 py-1.5 text-sm text-stone-300 transition-colors hover:border-amber-600 hover:text-amber-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3.5 w-3.5"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>
                            update
                          </button>
                          <button
                            onClick={() => deletetodo(todoObject.id)}
                            className="flex items-center gap-1 rounded-lg border border-stone-700 px-3 py-1.5 text-sm text-stone-400 transition-colors hover:border-rose-700 hover:text-rose-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3.5 w-3.5"
                            >
                              <path d="M3 6h18" />
                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            </svg>
                            delete
                          </button>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default App;