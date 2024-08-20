"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_repository_1 = require("./infrastructure/repositories/transaction.repository");
const transaction_controller_1 = require("./interface-adapters/controllers/transaction.controller");
const prisma_service_1 = require("./infrastructure/prisma/prisma.service");
const transaction_service_1 = require("./interface-adapters/service/transaction.service");
const create_transaction_usecase_1 = require("./application/usecase/transaction/create-transaction.usecase");
const get_all_transactions_usecase_1 = require("./application/usecase/transaction/get-all-transactions.usecase");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [transaction_controller_1.TransactionController],
        providers: [
            transaction_service_1.TransactionService,
            create_transaction_usecase_1.CreateTransactionUseCase,
            get_all_transactions_usecase_1.GetAllTransactionsUseCase,
            transaction_repository_1.PrismaTransactionRepository,
            prisma_service_1.PrismaService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map