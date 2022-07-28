"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckoutSessionResponse = void 0;
class CreateCheckoutSessionResponse {
}
exports.CreateCheckoutSessionResponse = CreateCheckoutSessionResponse;
(function (CreateCheckoutSessionResponse) {
    let ChannelEnum;
    (function (ChannelEnum) {
        ChannelEnum[ChannelEnum["IOS"] = 'iOS'] = "IOS";
        ChannelEnum[ChannelEnum["Android"] = 'Android'] = "Android";
        ChannelEnum[ChannelEnum["Web"] = 'Web'] = "Web";
    })(ChannelEnum = CreateCheckoutSessionResponse.ChannelEnum || (CreateCheckoutSessionResponse.ChannelEnum = {}));
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = CreateCheckoutSessionResponse.RecurringProcessingModelEnum || (CreateCheckoutSessionResponse.RecurringProcessingModelEnum = {}));
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["ContAuth"] = 'ContAuth'] = "ContAuth";
        ShopperInteractionEnum[ShopperInteractionEnum["Moto"] = 'Moto'] = "Moto";
        ShopperInteractionEnum[ShopperInteractionEnum["POS"] = 'POS'] = "POS";
    })(ShopperInteractionEnum = CreateCheckoutSessionResponse.ShopperInteractionEnum || (CreateCheckoutSessionResponse.ShopperInteractionEnum = {}));
})(CreateCheckoutSessionResponse = exports.CreateCheckoutSessionResponse || (exports.CreateCheckoutSessionResponse = {}));
//# sourceMappingURL=createCheckoutSessionResponse.js.map