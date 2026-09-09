import { useState } from "react";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setIsLogin(true);
    }
  };   


  const handleLogOut = () => {
    setUsername("");
    setPassword("");
    setIsLogin(false);
  };
  if (isLogin) {
    return (
      <div>
        <p>Welcome , {username}</p>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Username : 
        <input
          type="text"
          placeholder="Enter Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></label>
        <br />
        <label>Password : 
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
