"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const transaction_entity_1 = require("../../domain/transaction.entity");
const category_entity_1 = require("../../domain/category.entity");
let TransactionRepository = class TransactionRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const category = await this.prisma.category.findUnique({
            where: { id: data.categoryId },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with id ${data.categoryId} not found`);
        }
        const createdData = await this.prisma.transaction.create({
            data: {
                title: data.title,
                value: data.value,
                date: data.date,
                type: data.type,
                categoryId: data.categoryId,
            },
        });
        return new transaction_entity_1.Transaction(createdData.id, createdData.title, createdData.date, createdData.value, createdData.type, new category_entity_1.Category(category.id, category.name));
    }
    async findAll() {
        const transactions = await this.prisma.transaction.findMany();
        return Promise.all(transactions.map(async (transaction) => {
            const category = await this.prisma.category.findUnique({
                where: { id: transaction.categoryId },
            });
            return new transaction_entity_1.Transaction(transaction.id, transaction.title, transaction.date, transaction.value, transaction.type, new category_entity_1.Category(category.id, category.name));
        }));
    }
    async findById(data) {
        const transaction = await this.prisma.transaction.findUnique({
            where: { id: data.id },
        });
        const category = await this.prisma.category.findUnique({
            where: { id: transaction.categoryId },
        });
        return new transaction_entity_1.Transaction(transaction.id, transaction.title, transaction.date, transaction.value, transaction.type, new category_entity_1.Category(category.id, category.name));
    }
};
exports.TransactionRepository = TransactionRepository;
exports.TransactionRepository = TransactionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionRepository);
//# sourceMappingURL=transaction.repository.js.map