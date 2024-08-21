import { TransactionType } from "src/domain/transaction.entity";

export interface IUpdateTransactionDTO {
  title?: string;
  value?: number;
  type?: TransactionType;
  categoryId?: string;
}
