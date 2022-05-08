import { Link, Outlet } from "react-router-dom";

export default function CashFlow() {
  return (
    <div style={{ display: "flex" }}>
      <nav>
        <Link to={`/cash-flow/account`} key={0}>
          Account
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
