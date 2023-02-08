export interface Operation {
    type: 'new' | 'edit'; // 'new' or 'edit'
}

export interface TransactionNewDTO {
    transactionType: string; // 'topup' or 'payment'
}

//Edit
export interface TransactionEditDTO {
    transactionID: string;
}
