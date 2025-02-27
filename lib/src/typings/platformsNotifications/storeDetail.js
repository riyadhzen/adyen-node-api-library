"use strict";
/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/platforms/notifications).
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDetail = void 0;
class StoreDetail {
}
exports.StoreDetail = StoreDetail;
(function (StoreDetail) {
    let ShopperInteractionEnum;
    (function (ShopperInteractionEnum) {
        ShopperInteractionEnum[ShopperInteractionEnum["Ecommerce"] = 'Ecommerce'] = "Ecommerce";
        ShopperInteractionEnum[ShopperInteractionEnum["Pos"] = 'POS'] = "Pos";
    })(ShopperInteractionEnum = StoreDetail.ShopperInteractionEnum || (StoreDetail.ShopperInteractionEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Active"] = 'Active'] = "Active";
        StatusEnum[StatusEnum["Closed"] = 'Closed'] = "Closed";
        StatusEnum[StatusEnum["Inactive"] = 'Inactive'] = "Inactive";
        StatusEnum[StatusEnum["InactiveWithModifications"] = 'InactiveWithModifications'] = "InactiveWithModifications";
        StatusEnum[StatusEnum["Pending"] = 'Pending'] = "Pending";
    })(StatusEnum = StoreDetail.StatusEnum || (StoreDetail.StatusEnum = {}));
})(StoreDetail = exports.StoreDetail || (exports.StoreDetail = {}));
//# sourceMappingURL=storeDetail.js.map