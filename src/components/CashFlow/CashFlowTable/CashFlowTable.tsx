import IAccount from "../../../types/account.type";

interface CashFlowTableProps {
  accountData: IAccount
}

export default function CashFlowTable({ accountData }: CashFlowTableProps) {
  return (
    <div>
      <div>
        <h3>Inflow</h3>
        <h3>Outflow</h3>
        <h4>Cash Increase</h4>
      </div>
    </div>
  );
}
