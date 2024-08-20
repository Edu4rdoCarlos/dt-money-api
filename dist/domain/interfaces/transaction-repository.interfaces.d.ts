import { IGetTransactionDTO } from "src/application/dto/get-transaction.dto";
import { Transaction } from "../transaction.entity";
import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
export interface ITransactionRepository {
    create(data: ICreateTransactionDTO): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findById(data: IGetTransactionDTO): Promise<Transaction>;
}
