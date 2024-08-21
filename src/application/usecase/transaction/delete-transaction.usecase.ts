import { Injectable } from "@nestjs/common";
import { IDeleteTransactionDTO } from "src/application/dto/delete-transaction.dto";
import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";

@Injectable()
export class DeleteTransactionsUseCase {
  constructor(private transactionRepository: ITransactionRepository) {}

  async execute(data: IDeleteTransactionDTO): Promise<boolean> {
    return this.transactionRepository.delete(data);
  }
}
