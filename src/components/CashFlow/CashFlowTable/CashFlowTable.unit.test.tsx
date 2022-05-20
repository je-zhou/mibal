import { render, screen } from "@testing-library/react";
import { mockAccount } from "../../../mock_data/mock_data";

import IFlow from "../../../types/flow.type";
import CashFlowTable from "./CashFlowTable";


test("Cash Flow Table Titles render", () => {
  render(<CashFlowTable accountData={mockAccount} />);

  expect(screen.getByText("Inflow")).toBeInTheDocument();
  expect(screen.getByText("Outflow")).toBeInTheDocument();
});

test("Cash Flow Table Contents render correctly", () => {
  render(<CashFlowTable accountData={mockAccount} />);

  for (var i = 0; i < mockAccount.flows.length; i++) {
    const flow: IFlow = mockAccount.flows[i]
    expect(screen.getByText(flow.name)).toBeInTheDocument();
  }
});