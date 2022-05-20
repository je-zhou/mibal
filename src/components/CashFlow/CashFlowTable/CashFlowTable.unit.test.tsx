import { render, screen } from "@testing-library/react";
import IAccount from "../../../types/account.type";
import IBank from "../../../types/bank.type";
import IFlow from "../../../types/flow.type";
import ITransaction from "../../../types/transaction.type";
import CashFlowTable from "./CashFlowTable";

const mockBank: IBank = { name: "Upbank Splurge" }
const mockTransaction: ITransaction = { timestamp: Date.now(), description: "Bought some cookies", bank: mockBank, amount: 100 }
const mockFlow: IFlow = { name: "Primary Revenue", direction: "inflow", transactions: [mockTransaction], getBalance: () => 1 }
const mockData: IAccount = { flows: [mockFlow], getBalance() { return 1 } };

test("Cash Flow Table Titles render", () => {
  render(<CashFlowTable accountData={mockData} />);

  expect(screen.getByText("Inflow")).toBeInTheDocument();
  expect(screen.getByText("Outflow")).toBeInTheDocument();
});

test("Cash Flow Table Contents render correctly", () => {
  render(<CashFlowTable accountData={mockData} />);

  for (var i = 0; i < mockData.flows.length; i++) {
    const flow: IFlow = mockData.flows[i]
    expect(screen.getByText(flow.name)).toBeInTheDocument();
  }
});