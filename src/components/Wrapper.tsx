import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Wrapper() {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Wrapper;
