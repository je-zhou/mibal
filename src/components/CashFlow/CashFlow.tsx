import { Link, Outlet } from "react-router-dom";
import getData from "../../dummyData";

export default function CashFlow() {
  let data = getData();
  console.log(data);
  let accounts = data.map((obj) => (
    <Link to={`/cash-flow/${obj.accountName}`} key={obj.accountName}>
      {" | "}
      {obj.accountName}
    </Link>
  ));

  return (
    <div>
      <nav>{accounts}</nav>
      <Outlet />
    </div>
  );
}
