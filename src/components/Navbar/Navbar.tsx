import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>MiBal</h1>
      <nav>
        <Link to="/balance-sheet">Balance Sheet</Link> |{" "}
        <Link to="/cash-flow">Cash Flow</Link>
      </nav>
    </div>
  );
}
