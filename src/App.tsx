import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  return (
    <div className="wrapper">
      <h1>Title</h1>
      <nav>
        <Link to="/balance-sheet">Balance Sheet</Link> |{" "}
        <Link to="/cash-flow">Cash Flow</Link>
        <Outlet />
      </nav>
    </div>
  );
}

export default App;
