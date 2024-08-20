import { Injectable } from "@nestjs/common";

import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";
import { Transaction } from "src/domain/transaction.entity";

@Injectable()
export class GetAllTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }
}
