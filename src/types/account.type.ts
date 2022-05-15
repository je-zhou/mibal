import IFlow from "./flow.type";

export default interface IAccount {
    flows: Array<IFlow>
    getBalance(dateFrom?: Date | null): number, 
  }
  