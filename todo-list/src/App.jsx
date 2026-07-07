import { useState } from "react";

function App() {
  const todo = [];
  const [newtodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);
  const AddTodo = () => {
    setList([...list, newtodo]);
    setNewTodo("");
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
        {list.map((todo) => {
          return <li>{todo}</li>;
        })}
      </div>
    </>
  );
}

export default App;
