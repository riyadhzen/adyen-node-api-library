"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutBalanceCheckRequest = void 0;
class CheckoutBalanceCheckRequest {
}
exports.CheckoutBalanceCheckRequest = CheckoutBalanceCheckRequest;
(function (CheckoutBalanceCheckRequest) {
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = CheckoutBalanceCheckRequest.RecurringProcessingModelEnum || (CheckoutBalanceCheckRequest.RecurringProcessingModelEnum = {}));
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["ContAuth"] = 'ContAuth'] = "ContAuth";
        ShopperInteractionEnum[ShopperInteractionEnum["Moto"] = 'Moto'] = "Moto";
        ShopperInteractionEnum[ShopperInteractionEnum["POS"] = 'POS'] = "POS";
    })(ShopperInteractionEnum = CheckoutBalanceCheckRequest.ShopperInteractionEnum || (CheckoutBalanceCheckRequest.ShopperInteractionEnum = {}));
})(CheckoutBalanceCheckRequest = exports.CheckoutBalanceCheckRequest || (exports.CheckoutBalanceCheckRequest = {}));
//# sourceMappingURL=checkoutBalanceCheckRequest.js.map