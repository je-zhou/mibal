import getData from "../../dummyData";
import AddTransactionButton from "./AddTransactionButton/AddTransactionButton";
import NewFlowButton from "./NewFlowButton/NewFlowButton";

export default function CashFlow() {
 // let data = getData();
  // let accounts = data.map((obj) => (
  //   <h3  key={obj.accountName}>
  //     {obj.accountName}
  //   </h3>
  // ));

  return (
    <div>
     <h1>Cash Flow</h1>
     <h3>April 2022</h3>
     <NewFlowButton />
      <AddTransactionButton />
    </div>
  );
}
