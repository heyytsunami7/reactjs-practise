import { use, useState } from "react";

function App() {
  const [newtodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [editing,isediting] = useState("")
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
      setError("")
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


  const deletetodo = (id)=>{
     const updatedList = list.filter((todoObject)=>{
        if(todoObject.id === id){
           return todoObject.id !== id ;
        }
     })
     setList(updatedList);
  }

  const edtitodo = (id) =>{

  }
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
              {todoObject.task}
              <button onClick={edtitodo}>update</button>
              <button onClick={deletetodo}>delete</button>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default App;
