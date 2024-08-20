import { Injectable } from "@nestjs/common";
import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";
import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";

import { Transaction } from "src/domain/transaction.entity";
import { TransactionRepository } from "src/infrastructure/repositories/transaction.repository";

@Injectable()
export class GetTransactionsUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(data: IGetTransactionDTO): Promise<Transaction> {
    return this.transactionRepository.findById(data);
  }
}
