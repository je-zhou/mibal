import { render, screen } from "@testing-library/react";
import IAccount from "../../../types/account.type";
import CashFlowTable from "./CashFlowTable";


test("Cash Flow Table Titles render", () => {
    const mockData: IAccount = {flows: [], getBalance() {return 1}};

  render(<CashFlowTable />);

  expect(screen.getByText("Inflow")).toBeInTheDocument() ;
  expect(screen.getByText("Outflow")).toBeInTheDocument() ;
});
