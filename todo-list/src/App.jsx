import { useState } from "react";

function App() {
  const [newtodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);

  const AddTodo = () => {
    if (newtodo.trim() === ""){
      alert("write something")
      return
    }
    else {
    const todoObject = {
      id: list.length + 1,
      task: newtodo,
      status: false,
    };
    setList([...list, todoObject]);
    setNewTodo("");
  };
  }

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
              {todoObject.task}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default App;
