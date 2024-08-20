import { Injectable } from "@nestjs/common";

import { Transaction } from "src/domain/transaction.entity";
import { TransactionRepository } from "src/infrastructure/repositories/transaction.repository";

@Injectable()
export class GetAllTransactionsUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }
}
