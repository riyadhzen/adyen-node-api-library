"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAmountUpdateResource = void 0;
class PaymentAmountUpdateResource {
}
exports.PaymentAmountUpdateResource = PaymentAmountUpdateResource;
(function (PaymentAmountUpdateResource) {
    let ReasonEnum;
    (function (ReasonEnum) {
        ReasonEnum[ReasonEnum["DelayedCharge"] = 'delayedCharge'] = "DelayedCharge";
        ReasonEnum[ReasonEnum["NoShow"] = 'noShow'] = "NoShow";
    })(ReasonEnum = PaymentAmountUpdateResource.ReasonEnum || (PaymentAmountUpdateResource.ReasonEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Received"] = 'received'] = "Received";
    })(StatusEnum = PaymentAmountUpdateResource.StatusEnum || (PaymentAmountUpdateResource.StatusEnum = {}));
})(PaymentAmountUpdateResource = exports.PaymentAmountUpdateResource || (exports.PaymentAmountUpdateResource = {}));
//# sourceMappingURL=paymentAmountUpdateResource.js.map