import { Controller, Post, Body, Get } from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { Transaction } from "src/domain/transaction.entity";
import { TransactionService } from "../service/transaction.service";

@Controller("transactions")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(
    @Body() createTransactionDTO: ICreateTransactionDTO
  ): Promise<Transaction> {
    return this.transactionService.createTransaction(createTransactionDTO);
  }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }
}
