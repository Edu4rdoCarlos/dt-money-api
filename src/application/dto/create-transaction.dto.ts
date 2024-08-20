import { TransactionType } from "src/domain/transaction.entity";

export interface ICreateTransactionDTO {
  title: string;
  date: Date;
  value: number;
  type: TransactionType;
  categoryId: string;
}
