"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantRiskIndicator = void 0;
class MerchantRiskIndicator {
}
exports.MerchantRiskIndicator = MerchantRiskIndicator;
(function (MerchantRiskIndicator) {
    let DeliveryAddressIndicatorEnum;
    (function (DeliveryAddressIndicatorEnum) {
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["ShipToBillingAddress"] = 'shipToBillingAddress'] = "ShipToBillingAddress";
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["ShipToVerifiedAddress"] = 'shipToVerifiedAddress'] = "ShipToVerifiedAddress";
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["ShipToNewAddress"] = 'shipToNewAddress'] = "ShipToNewAddress";
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["ShipToStore"] = 'shipToStore'] = "ShipToStore";
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["DigitalGoods"] = 'digitalGoods'] = "DigitalGoods";
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["GoodsNotShipped"] = 'goodsNotShipped'] = "GoodsNotShipped";
        DeliveryAddressIndicatorEnum[DeliveryAddressIndicatorEnum["Other"] = 'other'] = "Other";
    })(DeliveryAddressIndicatorEnum = MerchantRiskIndicator.DeliveryAddressIndicatorEnum || (MerchantRiskIndicator.DeliveryAddressIndicatorEnum = {}));
    let DeliveryTimeframeEnum;
    (function (DeliveryTimeframeEnum) {
        DeliveryTimeframeEnum[DeliveryTimeframeEnum["ElectronicDelivery"] = 'electronicDelivery'] = "ElectronicDelivery";
        DeliveryTimeframeEnum[DeliveryTimeframeEnum["SameDayShipping"] = 'sameDayShipping'] = "SameDayShipping";
        DeliveryTimeframeEnum[DeliveryTimeframeEnum["OvernightShipping"] = 'overnightShipping'] = "OvernightShipping";
        DeliveryTimeframeEnum[DeliveryTimeframeEnum["TwoOrMoreDaysShipping"] = 'twoOrMoreDaysShipping'] = "TwoOrMoreDaysShipping";
    })(DeliveryTimeframeEnum = MerchantRiskIndicator.DeliveryTimeframeEnum || (MerchantRiskIndicator.DeliveryTimeframeEnum = {}));
})(MerchantRiskIndicator = exports.MerchantRiskIndicator || (exports.MerchantRiskIndicator = {}));
//# sourceMappingURL=merchantRiskIndicator.js.map