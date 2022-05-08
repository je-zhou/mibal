import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <h1>Title</h1>
      <nav>
        {" "}
        <Link to="/balance-sheet">Balance Sheet</Link> |{" "}
        <Link to="/cash-flow">Cash Flow</Link>
        <Outlet />
      </nav>
    </div>
  );
}

export default App;
