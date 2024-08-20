import { Module } from "@nestjs/common";
import { TransactionController } from "./interface-adapters/controllers/transaction.controller";
import { PrismaService } from "./infrastructure/prisma/prisma.service";
import { TransactionRepository } from "./infrastructure/repositories/transaction.repository";
import { CreateTransactionUseCase } from "./application/usecase/transaction/create-transaction.usecase";
import { GetAllTransactionsUseCase } from "./application/usecase/transaction/get-all-transactions.usecase";
import { GetTransactionsUseCase } from "./application/usecase/transaction/get-transaction.usecase";
import { TransactionService } from "./interface-adapters/service/transaction.service";

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [PrismaService, TransactionRepository, TransactionService],
})
export class AppModule {}
