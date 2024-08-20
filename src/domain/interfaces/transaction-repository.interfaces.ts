import { Transaction, TransactionType } from '../transaction.entity';

export interface TransactionRepository {
  create(data: {
    title: string;
    date: Date;
    value: number;
    type: TransactionType;
    categoryId: string;
  }): Promise<Transaction>;

  findAll(): Promise<Transaction[]>;
}
