import getData from "../../dummyData";

export default function CashFlow() {
  let data = getData();
  let accounts = data.map((obj) => (
    <h1  key={obj.accountName}>
      {obj.accountName}
    </h1>
  ));

  return (
    <div>
      <nav>{accounts}</nav>
    </div>
  );
}
