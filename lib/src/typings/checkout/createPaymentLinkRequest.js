"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentLinkRequest = void 0;
class CreatePaymentLinkRequest {
}
exports.CreatePaymentLinkRequest = CreatePaymentLinkRequest;
(function (CreatePaymentLinkRequest) {
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = CreatePaymentLinkRequest.RecurringProcessingModelEnum || (CreatePaymentLinkRequest.RecurringProcessingModelEnum = {}));
    let RequiredShopperFieldsEnum;
    (function (RequiredShopperFieldsEnum) {
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["BillingAddress"] = 'billingAddress'] = "BillingAddress";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["DeliveryAddress"] = 'deliveryAddress'] = "DeliveryAddress";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["ShopperEmail"] = 'shopperEmail'] = "ShopperEmail";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["ShopperName"] = 'shopperName'] = "ShopperName";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["TelephoneNumber"] = 'telephoneNumber'] = "TelephoneNumber";
    })(RequiredShopperFieldsEnum = CreatePaymentLinkRequest.RequiredShopperFieldsEnum || (CreatePaymentLinkRequest.RequiredShopperFieldsEnum = {}));
    let StorePaymentMethodModeEnum;
    (function (StorePaymentMethodModeEnum) {
        StorePaymentMethodModeEnum[StorePaymentMethodModeEnum["AskForConsent"] = 'askForConsent'] = "AskForConsent";
        StorePaymentMethodModeEnum[StorePaymentMethodModeEnum["Disabled"] = 'disabled'] = "Disabled";
        StorePaymentMethodModeEnum[StorePaymentMethodModeEnum["Enabled"] = 'enabled'] = "Enabled";
    })(StorePaymentMethodModeEnum = CreatePaymentLinkRequest.StorePaymentMethodModeEnum || (CreatePaymentLinkRequest.StorePaymentMethodModeEnum = {}));
})(CreatePaymentLinkRequest = exports.CreatePaymentLinkRequest || (exports.CreatePaymentLinkRequest = {}));
//# sourceMappingURL=createPaymentLinkRequest.js.map