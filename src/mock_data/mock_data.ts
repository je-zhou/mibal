import IAccount from "../types/account.type";
import IBank from "../types/bank.type";
import IFlow from "../types/flow.type";
import ITransaction from "../types/transaction.type";


const mockBank: IBank = { name: "Upbank Splurge" }
const mockTransaction: ITransaction = { timestamp: Date.now(), description: "Bought some cookies", bank: mockBank, amount: 100 }
const mockFlow: IFlow = { name: "Primary Revenue", direction: "inflow", transactions: [mockTransaction], getBalance: () => 1 }
const mockAccount: IAccount = { name: "cash", flows: [mockFlow], getBalance() { return 1 } };

export {
    mockBank,
    mockTransaction,
    mockFlow,
    mockAccount,
}
