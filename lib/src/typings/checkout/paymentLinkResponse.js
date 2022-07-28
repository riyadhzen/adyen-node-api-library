"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkResponse = void 0;
class PaymentLinkResponse {
}
exports.PaymentLinkResponse = PaymentLinkResponse;
(function (PaymentLinkResponse) {
    let RecurringProcessingModelEnum;
    (function (RecurringProcessingModelEnum) {
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["CardOnFile"] = 'CardOnFile'] = "CardOnFile";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["Subscription"] = 'Subscription'] = "Subscription";
        RecurringProcessingModelEnum[RecurringProcessingModelEnum["UnscheduledCardOnFile"] = 'UnscheduledCardOnFile'] = "UnscheduledCardOnFile";
    })(RecurringProcessingModelEnum = PaymentLinkResponse.RecurringProcessingModelEnum || (PaymentLinkResponse.RecurringProcessingModelEnum = {}));
    let RequiredShopperFieldsEnum;
    (function (RequiredShopperFieldsEnum) {
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["BillingAddress"] = 'billingAddress'] = "BillingAddress";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["DeliveryAddress"] = 'deliveryAddress'] = "DeliveryAddress";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["ShopperEmail"] = 'shopperEmail'] = "ShopperEmail";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["ShopperName"] = 'shopperName'] = "ShopperName";
        RequiredShopperFieldsEnum[RequiredShopperFieldsEnum["TelephoneNumber"] = 'telephoneNumber'] = "TelephoneNumber";
    })(RequiredShopperFieldsEnum = PaymentLinkResponse.RequiredShopperFieldsEnum || (PaymentLinkResponse.RequiredShopperFieldsEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'active'] = "Active";
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
        StatusEnum[StatusEnum["Expired"] = 'expired'] = "Expired";
        StatusEnum[StatusEnum["Paid"] = 'paid'] = "Paid";
        StatusEnum[StatusEnum["PaymentPending"] = 'paymentPending'] = "PaymentPending";
    })(StatusEnum = PaymentLinkResponse.StatusEnum || (PaymentLinkResponse.StatusEnum = {}));
    let StorePaymentMethodModeEnum;
    (function (StorePaymentMethodModeEnum) {
        StorePaymentMethodModeEnum[StorePaymentMethodModeEnum["AskForConsent"] = 'askForConsent'] = "AskForConsent";
        StorePaymentMethodModeEnum[StorePaymentMethodModeEnum["Disabled"] = 'disabled'] = "Disabled";
        StorePaymentMethodModeEnum[StorePaymentMethodModeEnum["Enabled"] = 'enabled'] = "Enabled";
    })(StorePaymentMethodModeEnum = PaymentLinkResponse.StorePaymentMethodModeEnum || (PaymentLinkResponse.StorePaymentMethodModeEnum = {}));
})(PaymentLinkResponse = exports.PaymentLinkResponse || (exports.PaymentLinkResponse = {}));
//# sourceMappingURL=paymentLinkResponse.js.map