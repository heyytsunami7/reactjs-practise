import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");

  const {SetUser} = useContext(UserContext)
  
  const handleSubmit = (e) => {
     e.preventDefault()
     SetUser({Username,Password})
  }
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={Username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={Password}
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default Login;
