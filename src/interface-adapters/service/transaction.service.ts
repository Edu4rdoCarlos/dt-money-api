import { Injectable } from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/transaction/create-transaction.dto";
import { IGetTransactionDTO } from "src/application/dto/transaction/get-transaction.dto";
import { IUpdateTransactionDTO } from "src/application/dto/transaction/update-transaction.dto";

import { Transaction } from "src/domain/transaction.entity";
import { TransactionRepository } from "src/infrastructure/repositories/transaction.repository";

@Injectable()
export class TransactionService {
  constructor(
    private transactionRepository: TransactionRepository
    // private createTransactionUseCase: CreateTransactionUseCase,
    // private getTransactionUseCase: GetTransactionsUseCase
    // private getAllTransactionsUseCase: GetAllTransactionsUseCase
  ) {}

  async createTransaction(
    createTransactionDTO: ICreateTransactionDTO
  ): Promise<Transaction> {
    return this.transactionRepository.create(createTransactionDTO);
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }

  async getTransaction(
    getTransactionDTO: IGetTransactionDTO
  ): Promise<Transaction> {
    return this.transactionRepository.findById(getTransactionDTO);
  }

  async updateTransaction(
    id: string,
    updateTransactionDTO: IUpdateTransactionDTO
  ): Promise<Transaction> {
    return this.transactionRepository.update(id, updateTransactionDTO);
  }

  async deleteTransaction(id: string): Promise<boolean> {
    return this.transactionRepository.delete(id);
  }
}
