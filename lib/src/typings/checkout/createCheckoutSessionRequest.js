"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckoutSessionRequest = void 0;
class CreateCheckoutSessionRequest {
}
exports.CreateCheckoutSessionRequest = CreateCheckoutSessionRequest;
(function (CreateCheckoutSessionRequest) {
    let ChannelEnum;
    (function (ChannelEnum) {
        ChannelEnum[ChannelEnum["IOS"] = 'iOS'] = "IOS";
        ChannelEnum[ChannelEnum["Android"] = 'Android'] = "Android";
        ChannelEnum[ChannelEnum["Web"] = 'Web'] = "Web";
    })(ChannelEnum = CreateCheckoutSessionRequest.ChannelEnum || (CreateCheckoutSessionRequest.ChannelEnum = {}));
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = CreateCheckoutSessionRequest.RecurringProcessingModelEnum || (CreateCheckoutSessionRequest.RecurringProcessingModelEnum = {}));
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["ContAuth"] = 'ContAuth'] = "ContAuth";
        ShopperInteractionEnum[ShopperInteractionEnum["Moto"] = 'Moto'] = "Moto";
        ShopperInteractionEnum[ShopperInteractionEnum["POS"] = 'POS'] = "POS";
    })(ShopperInteractionEnum = CreateCheckoutSessionRequest.ShopperInteractionEnum || (CreateCheckoutSessionRequest.ShopperInteractionEnum = {}));
})(CreateCheckoutSessionRequest = exports.CreateCheckoutSessionRequest || (exports.CreateCheckoutSessionRequest = {}));
//# sourceMappingURL=createCheckoutSessionRequest.js.map