import { ICreateTransactionDTO } from "src/application/dto/create-transaction.dto";
import { Transaction } from "src/domain/transaction.entity";
import { TransactionService } from "../service/transaction.service";
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(createTransactionDTO: ICreateTransactionDTO): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
}
