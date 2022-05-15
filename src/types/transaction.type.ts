import IBank from "./bank.type";

export default interface ITransaction {
    id?: any | null,
    date: Date,
    description: string,
    bank: IBank,
    amount: number,
  }
  