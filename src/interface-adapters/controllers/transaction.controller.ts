import { Controller, Post, Body, Get, Delete } from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { Transaction } from "src/domain/transaction.entity";
import { TransactionService } from "../service/transaction.service";
import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";
import { IDeleteTransactionDTO } from "src/application/dto/delete-transaction.dto";

@Controller("transactions")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // @Post()
  // async create(
  //   @Body() createTransactionDTO: ICreateTransactionDTO
  // ): Promise<Transaction> {
  //   return this.transactionService.createTransaction(createTransactionDTO);
  // }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }

  // @Get()
  // async findById(
  //   @Body() getTransactionDTO: IGetTransactionDTO
  // ): Promise<Transaction> {
  //   return this.transactionService.getTransaction(getTransactionDTO);
  // }

  // @Delete()
  // async delete(
  //   @Body() deleteTransactionDTO: IDeleteTransactionDTO
  // ): Promise<Transaction> {
  //   return this.transactionService.deleteTransaction(deleteTransactionDTO);
  // }
}
