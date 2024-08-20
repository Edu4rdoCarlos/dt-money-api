import { Injectable } from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { CreateTransactionUseCase } from "src/application/usecase/transaction/create-transaction.usecase";
import { GetAllTransactionsUseCase } from "src/application/usecase/transaction/get-all-transactions.usecase";

import { Transaction } from "src/domain/transaction.entity";

@Injectable()
export class TransactionService {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase,
    private getAllTransactionsUseCase: GetAllTransactionsUseCase
  ) {}

  async createTransaction(
    createTransactionDTO: ICreateTransactionDTO
  ): Promise<Transaction> {
    return this.createTransactionUseCase.execute(createTransactionDTO);
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.getAllTransactionsUseCase.execute();
  }
}
