import IBank from "./bank.type";

export default interface ITransaction {
  id?: any | null,
  timestamp: number,
  description: string,
  bank: IBank,
  amount: number,
}
