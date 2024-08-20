import { PrismaService } from "../prisma/prisma.service";
import { Transaction } from "../../domain/transaction.entity";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";
export declare class TransactionRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ICreateTransactionDTO): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findById(data: IGetTransactionDTO): Promise<Transaction>;
}
