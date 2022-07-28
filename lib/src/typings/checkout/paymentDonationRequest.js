"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDonationRequest = void 0;
class PaymentDonationRequest {
}
exports.PaymentDonationRequest = PaymentDonationRequest;
(function (PaymentDonationRequest) {
    let ChannelEnum;
    (function (ChannelEnum) {
        ChannelEnum[ChannelEnum["IOS"] = 'iOS'] = "IOS";
        ChannelEnum[ChannelEnum["Android"] = 'Android'] = "Android";
        ChannelEnum[ChannelEnum["Web"] = 'Web'] = "Web";
    })(ChannelEnum = PaymentDonationRequest.ChannelEnum || (PaymentDonationRequest.ChannelEnum = {}));
    let EntityTypeEnum;
    (function (EntityTypeEnum) {
        EntityTypeEnum[EntityTypeEnum["NaturalPerson"] = 'NaturalPerson'] = "NaturalPerson";
        EntityTypeEnum[EntityTypeEnum["CompanyName"] = 'CompanyName'] = "CompanyName";
    })(EntityTypeEnum = PaymentDonationRequest.EntityTypeEnum || (PaymentDonationRequest.EntityTypeEnum = {}));
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = PaymentDonationRequest.RecurringProcessingModelEnum || (PaymentDonationRequest.RecurringProcessingModelEnum = {}));
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["ContAuth"] = 'ContAuth'] = "ContAuth";
        ShopperInteractionEnum[ShopperInteractionEnum["Moto"] = 'Moto'] = "Moto";
        ShopperInteractionEnum[ShopperInteractionEnum["POS"] = 'POS'] = "POS";
    })(ShopperInteractionEnum = PaymentDonationRequest.ShopperInteractionEnum || (PaymentDonationRequest.ShopperInteractionEnum = {}));
})(PaymentDonationRequest = exports.PaymentDonationRequest || (exports.PaymentDonationRequest = {}));
//# sourceMappingURL=paymentDonationRequest.js.map