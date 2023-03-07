export interface TransactionRequest {
    amount: number;
    concept: string;
    date?: string;
    type: "topup" | "payment";
    accountId: number;
    userId: number;
    to_account_id?: number;
}