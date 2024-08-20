"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
    TransactionType["INCOME"] = "income";
    TransactionType["OUTCOME"] = "outcome";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
class Transaction {
    constructor(id, title, date, value, type, category) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.value = value;
        this.type = type;
        this.category = category;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map