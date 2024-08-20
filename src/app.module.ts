import { Module } from '@nestjs/common';
import { PrismaTransactionRepository } from './infrastructure/repositories/transaction.repository';
import { TransactionController } from './interface-adapters/controllers/transaction.controller';
import { PrismaService } from './infrastructure/prisma/prisma.service';
import {
  CreateTransactionUseCase,
  GetAllTransactionsUseCase,
} from './application/usecase/transaction.usecase';

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [
    CreateTransactionUseCase,
    GetAllTransactionsUseCase,
    PrismaTransactionRepository,
    PrismaService,
  ],
})
export class AppModule {}
