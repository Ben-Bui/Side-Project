"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(recipients, details, amount) {
        this.recipients = recipients;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipients, " is owed $").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
