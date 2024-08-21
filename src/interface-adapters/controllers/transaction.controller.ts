import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Put,
  Param,
} from "@nestjs/common";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { Transaction } from "src/domain/transaction.entity";
import { TransactionService } from "../service/transaction.service";
import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";
import { IDeleteTransactionDTO } from "src/application/dto/delete-transaction.dto";
import { IUpdateTransactionDTO } from "src/application/dto/update-transaction.dto";

@Controller("api/transactions")
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(
    @Body() createTransactionDTO: ICreateTransactionDTO
  ): Promise<Transaction> {
    console.log("data", createTransactionDTO);

    return this.transactionService.createTransaction(createTransactionDTO);
  }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }

  @Get()
  async findById(
    @Body() getTransactionDTO: IGetTransactionDTO
  ): Promise<Transaction> {
    return this.transactionService.getTransaction(getTransactionDTO);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<boolean> {
    return this.transactionService.deleteTransaction(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateTransactionDTO: IUpdateTransactionDTO
  ): Promise<Transaction> {
    return this.transactionService.updateTransaction(id, updateTransactionDTO);
  }
}
