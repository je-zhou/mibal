let dummyData = [
  {
    accountName: "Primary Revenue",
    isInflow: true,
    transactions: [],
  },
  {
    accountName: "Secondary Revenue",
    isInflow: true,
    transactions: [],
  },
  {
    accountName: "Rent",
    isInflow: false,
    transactions: [],
  },
  {
    accountName: "Utilities",
    isInflow: false,
    transactions: [],
  },
  {
    accountName: "Splurge",
    isInflow: false,
    transactions: [],
  },
];

export default function getData() {
  return dummyData;
}
