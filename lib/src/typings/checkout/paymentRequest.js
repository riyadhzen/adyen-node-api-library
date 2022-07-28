"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequest = void 0;
class PaymentRequest {
}
exports.PaymentRequest = PaymentRequest;
(function (PaymentRequest) {
    let ChannelEnum;
    (function (ChannelEnum) {
        ChannelEnum[ChannelEnum["IOS"] = 'iOS'] = "IOS";
        ChannelEnum[ChannelEnum["Android"] = 'Android'] = "Android";
        ChannelEnum[ChannelEnum["Web"] = 'Web'] = "Web";
    })(ChannelEnum = PaymentRequest.ChannelEnum || (PaymentRequest.ChannelEnum = {}));
    let EntityTypeEnum;
    (function (EntityTypeEnum) {
        EntityTypeEnum[EntityTypeEnum["NaturalPerson"] = 'NaturalPerson'] = "NaturalPerson";
        EntityTypeEnum[EntityTypeEnum["CompanyName"] = 'CompanyName'] = "CompanyName";
    })(EntityTypeEnum = PaymentRequest.EntityTypeEnum || (PaymentRequest.EntityTypeEnum = {}));
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = PaymentRequest.RecurringProcessingModelEnum || (PaymentRequest.RecurringProcessingModelEnum = {}));
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["ContAuth"] = 'ContAuth'] = "ContAuth";
        ShopperInteractionEnum[ShopperInteractionEnum["Moto"] = 'Moto'] = "Moto";
        ShopperInteractionEnum[ShopperInteractionEnum["POS"] = 'POS'] = "POS";
    })(ShopperInteractionEnum = PaymentRequest.ShopperInteractionEnum || (PaymentRequest.ShopperInteractionEnum = {}));
})(PaymentRequest = exports.PaymentRequest || (exports.PaymentRequest = {}));
//# sourceMappingURL=paymentRequest.js.map