import { CreateTransactionDTO } from 'src/application/dto/create-transaction.dto';
import { CreateTransactionUseCase, GetAllTransactionsUseCase } from 'src/application/usecase/transaction.usecase';
import { Transaction } from 'src/domain/transaction.entity';
export declare class TransactionController {
    private createTransactionUseCase;
    private getAllTransactionsUseCase;
    constructor(createTransactionUseCase: CreateTransactionUseCase, getAllTransactionsUseCase: GetAllTransactionsUseCase);
    create(createTransactionDTO: CreateTransactionDTO): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
}
