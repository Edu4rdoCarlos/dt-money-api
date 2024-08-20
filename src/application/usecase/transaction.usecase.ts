import { Injectable } from '@nestjs/common';

import { TransactionRepository } from '../../domain/interfaces/transaction-repository.interfaces';
import { Transaction, TransactionType } from '../../domain/transaction.entity';
import { CreateTransactionDTO } from '../dto/create-transaction.dto';

@Injectable()
export class GetAllTransactionsUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }
}

@Injectable()
export class CreateTransactionUseCase {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async execute(data: CreateTransactionDTO): Promise<Transaction> {
    return this.transactionRepository.create({
      ...data,
      type: data.value >= 0 ? TransactionType.INCOME : TransactionType.OUTCOME,
    });
  }
}
