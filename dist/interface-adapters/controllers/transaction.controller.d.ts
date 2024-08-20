import { Transaction } from "src/domain/transaction.entity";
import { TransactionService } from "../service/transaction.service";
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    findAll(): Promise<Transaction[]>;
}
