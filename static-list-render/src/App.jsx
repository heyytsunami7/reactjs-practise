function App() {
  const list = [
    { id: 1, name: "Tony", role: "Admin" },
    { id: 2, name: "Robbert", role: "User" },
    { id: 3, name: "Ned", role: "User" },
  ];
  

  return (
  <>
  
    <ul>
      {list.map((item) =>(
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  </>
  );
}

export default App;
