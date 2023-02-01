export interface Transaction {
    id: number,
    amount: number;
    concept: string;
    date: String;
    type: String,
    accountId: number;
    userId: number,
    toAccountId: number;
}
