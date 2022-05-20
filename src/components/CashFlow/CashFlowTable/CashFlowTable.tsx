import IAccount from "../../../types/account.type";
import FlowTile from "./FlowTile";

interface CashFlowTableProps {
  accountData: IAccount
}

export default function CashFlowTable({ accountData }: CashFlowTableProps) {
  const flows = accountData.flows;

  const inflows: JSX.Element[] = []
  const outflows: JSX.Element[] = []

  for (var i = 0; i < flows.length; i++) {
    const flow = flows[i]
    if (flow.direction === "inflow") {
      inflows.push(<FlowTile flow={flow} />)
    } else {
      outflows.push(<FlowTile flow={flow} />)
    }
  }

  return (
    <div>
      <div>
        <h3>Inflow</h3>
        {inflows}
        <h3>Outflow</h3>
        {outflows}
        <h4>Cash Increase</h4>
      </div>
    </div>
  );
}
