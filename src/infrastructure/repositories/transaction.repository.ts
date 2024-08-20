import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Transaction, TransactionType } from "../../domain/transaction.entity";
import { Category } from "../../domain/category.entity";
import { ITransactionRepository } from "../../domain/interfaces/transaction-repository.interfaces";

@Injectable()
export class TransactionRepository implements ITransactionRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    title: string;
    date: Date;
    value: number;
    type: TransactionType;
    categoryId: string;
  }): Promise<Transaction> {
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
        date: data.date,
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
}
