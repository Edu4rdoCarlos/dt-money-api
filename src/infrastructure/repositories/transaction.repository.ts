import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Transaction } from "../../domain/transaction.entity";
import { Category } from "../../domain/category.entity";
import { ITransactionRepository } from "../../domain/interfaces/transaction-repository.interfaces";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";

@Injectable()
export class TransactionRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateTransactionDTO): Promise<Transaction> {
    const category = await this.prisma.category.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      throw new NotFoundException(
        `Category with id ${data.categoryId} not found`
      );
    }

    const createdData = await this.prisma.transaction.create({
      data: {
        title: data.title,
        value: data.value,
        date: new Date(),
        type: data.type,
        categoryId: data.categoryId,
      },
    });

    return new Transaction(
      createdData.id,
      createdData.title,
      createdData.date,
      createdData.value,
      createdData.type,
      new Category(category.id, category.name)
    );
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany();

    return Promise.all(
      transactions.map(async (transaction) => {
        const category = await this.prisma.category.findUnique({
          where: { id: transaction.categoryId },
        });

        return new Transaction(
          transaction.id,
          transaction.title,
          transaction.date,
          transaction.value,
          transaction.type,
          new Category(category.id, category.name)
        );
      })
    );
  }

  async findById(data: IGetTransactionDTO): Promise<Transaction> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: data.id },
    });

    const category = await this.prisma.category.findUnique({
      where: { id: transaction.categoryId },
    });

    return new Transaction(
      transaction.id,
      transaction.title,
      transaction.date,
      transaction.value,
      transaction.type,
      new Category(category.id, category.name)
    );
  }
}
