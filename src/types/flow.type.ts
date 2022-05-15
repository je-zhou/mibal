import ITransaction from "./transaction.type";

export default interface IFlow {
    id?: any,
    name: string,
    direction: FlowDirection,
    transactions: Array<ITransaction>,
    getBalance(dateFrom?: Date | null): number, 
  }

type FlowDirection = "inflow" | "outflow";
