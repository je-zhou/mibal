import { useState } from "react";
import { mockAccount, mockFlow } from "../../mock_data/mock_data";
import IFlow from "../../types/flow.type";
import AddTransactionButton from "../../components/CashFlow/AddTransactionButton/AddTransactionButton";
import NewFlowButton from "../../components/CashFlow/NewFlowButton/NewFlowButton";
import CashFlowTable from "../../components/CashFlow/CashFlowTable/CashFlowTable";


export default function CashFlow() {
  let [accountData, setaccountData] = useState(mockAccount)

  function addFlow(flow: IFlow): void {
    setaccountData((prev) => {
      let newFlows = prev.flows
      newFlows.push(mockFlow)
      return { ...prev, flows: newFlows }
    })
  }

  return (
    <div>
      <h1>Cash Flow</h1>
      <h3>April 2022</h3>
      <NewFlowButton handleClick={addFlow} />
      <AddTransactionButton />
      <CashFlowTable accountData={accountData} />
    </div>
  );
}
