import { TransactionType } from "src/domain/transaction.entity";

export interface ICreateTransactionDTO {
  title: string;
  value: number;
  type: TransactionType;
  categoryId: string;
}
