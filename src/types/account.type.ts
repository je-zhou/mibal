import IFlow from "./flow.type";

export default interface IAccount {
  name: string,
  flows: Array<IFlow>
  getBalance(dateFrom?: Date | null): number,
}
