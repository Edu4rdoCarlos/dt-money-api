import { Category } from './category.entity';
export declare enum TransactionType {
    INCOME = "income",
    OUTCOME = "outcome"
}
export declare class Transaction {
    private id;
    private title;
    private date;
    private value;
    private type;
    private category;
    constructor(id: string, title: string, date: Date, value: number, type: 'income' | 'outcome', category: Category);
    getId(): string;
    setId(id: string): void;
    getTitle(): string;
    setTitle(title: string): void;
    getDate(): Date;
    setDate(date: Date): void;
    getValue(): number;
    setValue(value: number): void;
    getType(): 'income' | 'outcome';
    setType(type: 'income' | 'outcome'): void;
    getCategory(): Category;
    setCategory(category: Category): void;
}
