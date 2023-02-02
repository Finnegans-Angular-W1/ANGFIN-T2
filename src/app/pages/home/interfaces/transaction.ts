export interface Transaction {
    id: number,
    amount: number;
    concept: string;
    date: string;
    type: string,
    accountId: number;
    userId: number,
    toAccountId: number;
}
