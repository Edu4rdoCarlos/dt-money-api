import { Injectable } from "@nestjs/common";
import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";

@Injectable()
export class DeleteTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.transactionRepository.delete(id);
  }
}
