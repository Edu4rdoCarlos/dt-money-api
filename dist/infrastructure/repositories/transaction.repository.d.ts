import { PrismaService } from '../prisma/prisma.service';
import { Transaction, TransactionType } from '../../domain/transaction.entity';
import { TransactionRepository } from '../../domain/interfaces/transaction-repository.interfaces';
export declare class PrismaTransactionRepository implements TransactionRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        title: string;
        date: Date;
        value: number;
        type: TransactionType;
        categoryId: string;
    }): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
}
