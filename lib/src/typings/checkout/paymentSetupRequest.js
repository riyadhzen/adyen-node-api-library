"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSetupRequest = void 0;
class PaymentSetupRequest {
}
exports.PaymentSetupRequest = PaymentSetupRequest;
(function (PaymentSetupRequest) {
    let ChannelEnum;
    (function (ChannelEnum) {
        ChannelEnum[ChannelEnum["IOS"] = 'iOS'] = "IOS";
        ChannelEnum[ChannelEnum["Android"] = 'Android'] = "Android";
        ChannelEnum[ChannelEnum["Web"] = 'Web'] = "Web";
    })(ChannelEnum = PaymentSetupRequest.ChannelEnum || (PaymentSetupRequest.ChannelEnum = {}));
    let EntityTypeEnum;
    (function (EntityTypeEnum) {
        EntityTypeEnum[EntityTypeEnum["NaturalPerson"] = 'NaturalPerson'] = "NaturalPerson";
        EntityTypeEnum[EntityTypeEnum["CompanyName"] = 'CompanyName'] = "CompanyName";
    })(EntityTypeEnum = PaymentSetupRequest.EntityTypeEnum || (PaymentSetupRequest.EntityTypeEnum = {}));
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["ContAuth"] = 'ContAuth'] = "ContAuth";
        ShopperInteractionEnum[ShopperInteractionEnum["Moto"] = 'Moto'] = "Moto";
        ShopperInteractionEnum[ShopperInteractionEnum["POS"] = 'POS'] = "POS";
    })(ShopperInteractionEnum = PaymentSetupRequest.ShopperInteractionEnum || (PaymentSetupRequest.ShopperInteractionEnum = {}));
})(PaymentSetupRequest = exports.PaymentSetupRequest || (exports.PaymentSetupRequest = {}));
//# sourceMappingURL=paymentSetupRequest.js.map