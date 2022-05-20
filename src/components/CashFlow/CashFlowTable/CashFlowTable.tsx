import IAccount from "../../../types/account.type";
import FlowTile from "./FlowTile";

interface CashFlowTableProps {
  accountData: IAccount
}

export default function CashFlowTable({ accountData }: CashFlowTableProps) {

  const flows = accountData.flows.map((flow) =>
    <FlowTile flow={flow} />
  )

  return (
    <div>
      <div>
        <h3>Inflow</h3>
        <h3>Outflow</h3>
        {flows}
        <h4>Cash Increase</h4>
      </div>
    </div>
  );
}
