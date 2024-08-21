import { Injectable } from "@nestjs/common";
import { IGetTransactionDTO } from "src/application/dto/transaction/get-transaction.dto";
import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";

import { Transaction } from "src/domain/transaction.entity";

@Injectable()
export class GetTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(data: IGetTransactionDTO): Promise<Transaction> {
    return this.transactionRepository.findById(data);
  }
}
