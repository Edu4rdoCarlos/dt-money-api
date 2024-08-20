import { TransactionType } from 'src/domain/transaction.entity';
export interface CreateTransactionDTO {
    title: string;
    date: Date;
    value: number;
    type: TransactionType;
    categoryId: string;
}
