import { Outlet, Link } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
