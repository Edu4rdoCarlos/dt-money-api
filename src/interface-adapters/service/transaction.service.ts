import { Injectable } from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";

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

  // async getTransaction(
  //   getTransactionDTO: IGetTransactionDTO
  // ): Promise<Transaction> {
  //   return this.getTransactionUseCase.execute(getTransactionDTO);
  // }
}
