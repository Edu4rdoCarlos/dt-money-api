import { IGetTransactionDTO } from "src/application/dto/transaction/get-transaction.dto";
import { Transaction } from "../transaction.entity";
import { IUpdateTransactionDTO } from "src/application/dto/transaction/update-transaction.dto";
import { ICreateTransactionDTO } from "src/application/dto/transaction/create-transaction.dto";

export interface ITransactionRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  findById(data: IGetTransactionDTO): Promise<Transaction>;
  delete(id: string): Promise<boolean>;
  update(id: string, data: IUpdateTransactionDTO): Promise<Transaction>;
}
