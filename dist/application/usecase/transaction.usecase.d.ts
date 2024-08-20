import { TransactionRepository } from '../../domain/interfaces/transaction-repository.interfaces';
import { Transaction } from '../../domain/transaction.entity';
import { CreateTransactionDTO } from '../dto/create-transaction.dto';
export declare class GetAllTransactionsUseCase {
    private transactionRepository;
    constructor(transactionRepository: TransactionRepository);
    execute(): Promise<Transaction[]>;
}
export declare class CreateTransactionUseCase {
    private readonly transactionRepository;
    constructor(transactionRepository: TransactionRepository);
    execute(data: CreateTransactionDTO): Promise<Transaction>;
}
