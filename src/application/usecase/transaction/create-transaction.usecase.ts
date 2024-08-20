import { Injectable } from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";
import { Transaction, TransactionType } from "src/domain/transaction.entity";

@Injectable()
export class CreateTransactionUseCase {
  constructor(private readonly transactionRepository: ITransactionRepository) {}

  async execute(data: ICreateTransactionDTO): Promise<Transaction> {
    return this.transactionRepository.create({
      ...data,
      type: data.value >= 0 ? TransactionType.INCOME : TransactionType.OUTCOME,
    });
  }
}
