import { mockAccount } from "../../mock_data/mock_data";
import AddTransactionButton from "./AddTransactionButton/AddTransactionButton";
import CashFlowTable from "./CashFlowTable/CashFlowTable";
import NewFlowButton from "./NewFlowButton/NewFlowButton";

export default function CashFlow() {
  return (
    <div>
      <h1>Cash Flow</h1>
      <h3>April 2022</h3>
      <NewFlowButton />
      <AddTransactionButton />
      <CashFlowTable accountData={mockAccount} />
    </div>
  );
}
