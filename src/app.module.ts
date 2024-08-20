import { Module } from "@nestjs/common";
import { PrismaTransactionRepository } from "./infrastructure/repositories/transaction.repository";
import { TransactionController } from "./interface-adapters/controllers/transaction.controller";
import { PrismaService } from "./infrastructure/prisma/prisma.service";

import { TransactionService } from "./interface-adapters/service/transaction.service";
import { CreateTransactionUseCase } from "./application/usecase/transaction/create-transaction.usecase";
import { GetAllTransactionsUseCase } from "./application/usecase/transaction/get-all-transactions.usecase";

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [
    TransactionService,
    CreateTransactionUseCase,
    GetAllTransactionsUseCase,
    PrismaTransactionRepository,
    PrismaService,
  ],
})
export class AppModule {}
