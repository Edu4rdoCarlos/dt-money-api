import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Transaction } from "../../domain/transaction.entity";
import { Category } from "../../domain/category.entity";
import { IGetTransactionDTO } from "src/application/dto/transaction/get-transaction.dto";
import { IUpdateTransactionDTO } from "src/application/dto/transaction/update-transaction.dto";
import { ICreateTransactionDTO } from "src/application/dto/transaction/create-transaction.dto";
import { ITransactionRepository } from "src/domain/interfaces/transaction-repository.interfaces";

@Injectable()
export class TransactionRepository implements ITransactionRepository {
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
        createdAt: new Date(),
        updatedAt: new Date(),
        type: data.type,
        categoryId: data.categoryId,
      },
    });

    return new Transaction(
      createdData.id,
      createdData.title,
      createdData.createdAt,
      createdData.updatedAt,
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
          transaction.createdAt,
          transaction.updatedAt,
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
      transaction.createdAt,
      transaction.updatedAt,
      transaction.value,
      transaction.type,
      new Category(category.id, category.name)
    );
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.transaction.delete({
        where: { id },
      });

      return true;
    } catch (error) {
      console.error("Error deleting transaction:", error);
      return false;
    }
  }

  async update(id: string, data: IUpdateTransactionDTO): Promise<Transaction> {
    const oldTransaction = await this.prisma.transaction.findUnique({
      where: { id },
    });

    const updatedData = await this.prisma.transaction.update({
      where: {
        id,
      },
      data: {
        title: data.title || oldTransaction.title,
        value: data.value || oldTransaction.value,
        updatedAt: new Date(),
        type: data.type || oldTransaction.type,
        categoryId: data.categoryId || oldTransaction.categoryId,
      },
    });

    const category = await this.prisma.category.findUnique({
      where: { id: updatedData.categoryId },
    });

    return new Transaction(
      updatedData.id,
      updatedData.title,
      updatedData.createdAt,
      updatedData.updatedAt,
      updatedData.value,
      updatedData.type,
      new Category(category.id, category.name)
    );
  }
}
