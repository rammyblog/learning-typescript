var Payment = /** @class */ (function () {
    function Payment(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipent + " is owed $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
export { Payment };
