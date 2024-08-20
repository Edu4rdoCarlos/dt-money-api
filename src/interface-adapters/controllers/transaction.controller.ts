import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTransactionDTO } from 'src/application/dto/create-transaction.dto';
import {
  CreateTransactionUseCase,
  GetAllTransactionsUseCase,
} from 'src/application/usecase/transaction.usecase';
import { Transaction } from 'src/domain/transaction.entity';

@Controller('transactions')
export class TransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase,
    private getAllTransactionsUseCase: GetAllTransactionsUseCase,
  ) {}

  @Post()
  async create(
    @Body() createTransactionDTO: CreateTransactionDTO,
  ): Promise<Transaction> {
    return this.createTransactionUseCase.execute(createTransactionDTO);
  }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.getAllTransactionsUseCase.execute();
  }
}
