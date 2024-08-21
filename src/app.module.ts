import { Module } from "@nestjs/common";
import { TransactionController } from "./interface-adapters/controllers/transaction.controller";
import { PrismaService } from "./infrastructure/prisma/prisma.service";
import { TransactionRepository } from "./infrastructure/repositories/transaction.repository";
import { TransactionService } from "./interface-adapters/service/transaction.service";
import { CategoryRepository } from "./infrastructure/repositories/category.repository";
import { CategoryService } from "./interface-adapters/service/category.service";
import { CategoryController } from "./interface-adapters/controllers/category.controller";

@Module({
  imports: [],
  controllers: [TransactionController, CategoryController],
  providers: [
    PrismaService,
    TransactionRepository,
    TransactionService,
    CategoryRepository,
    CategoryService,
  ],
})
export class AppModule {}
