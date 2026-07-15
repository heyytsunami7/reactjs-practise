import { use, useState } from "react";

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
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="add todo"
          value={newtodo}
          id="todoitem"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button onClick={AddTodo}>Add</button>
        {error && <p>{error}</p>}
      </div>
      <div>
        {list.map((todoObject) => {
          return (
            <li key={todoObject.id}>
              <input
                type="checkbox"
                checked={todoObject.status}
                onChange={() => todostatus(todoObject.id)}
              />
              {editingid === todoObject.id ? (
                <>
                  <input
                    type="text"  value={edittext}
                    onChange={(e) => setEdittext(e.target.value)}
                  />
                  <button onClick={savedtodo}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  {todoObject.task}
                  <button onClick={() => edtitodo(todoObject.id)}>
                    update
                  </button>
                  <button onClick={() => deletetodo(todoObject.id)}>
                    delete
                  </button>
                </>
              )}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default App;
