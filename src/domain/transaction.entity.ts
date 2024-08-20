import { Category } from "./category.entity";

export enum TransactionType {
  INCOME = "income",
  OUTCOME = "outcome",
}

export class Transaction {
  constructor(
    private id: string,
    private title: string,
    private date: Date,
    private value: number,
    private type: "income" | "outcome",
    private category: Category
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDate(): Date {
    return this.date;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public getType(): "income" | "outcome" {
    return this.type;
  }

  public setType(type: "income" | "outcome"): void {
    this.type = type;
  }

  public getCategory(): Category {
    return this.category;
  }

  public setCategory(category: Category): void {
    this.category = category;
  }
}
