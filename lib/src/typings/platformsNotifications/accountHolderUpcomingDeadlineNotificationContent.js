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
exports.AccountHolderUpcomingDeadlineNotificationContent = void 0;
class AccountHolderUpcomingDeadlineNotificationContent {
}
exports.AccountHolderUpcomingDeadlineNotificationContent = AccountHolderUpcomingDeadlineNotificationContent;
(function (AccountHolderUpcomingDeadlineNotificationContent) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["AccessPii"] = 'AccessPii'] = "AccessPii";
        EventEnum[EventEnum["ApiTierUpdate"] = 'ApiTierUpdate'] = "ApiTierUpdate";
        EventEnum[EventEnum["CloseAccount"] = 'CloseAccount'] = "CloseAccount";
        EventEnum[EventEnum["CloseStores"] = 'CloseStores'] = "CloseStores";
        EventEnum[EventEnum["DeleteBankAccounts"] = 'DeleteBankAccounts'] = "DeleteBankAccounts";
        EventEnum[EventEnum["DeletePayoutMethods"] = 'DeletePayoutMethods'] = "DeletePayoutMethods";
        EventEnum[EventEnum["DeleteShareholders"] = 'DeleteShareholders'] = "DeleteShareholders";
        EventEnum[EventEnum["DeleteSignatories"] = 'DeleteSignatories'] = "DeleteSignatories";
        EventEnum[EventEnum["InactivateAccount"] = 'InactivateAccount'] = "InactivateAccount";
        EventEnum[EventEnum["KycDeadlineExtension"] = 'KYCDeadlineExtension'] = "KycDeadlineExtension";
        EventEnum[EventEnum["RecalculateAccountStatusAndProcessingTier"] = 'RecalculateAccountStatusAndProcessingTier'] = "RecalculateAccountStatusAndProcessingTier";
        EventEnum[EventEnum["RefundNotPaidOutTransfers"] = 'RefundNotPaidOutTransfers'] = "RefundNotPaidOutTransfers";
        EventEnum[EventEnum["ResolveEvents"] = 'ResolveEvents'] = "ResolveEvents";
        EventEnum[EventEnum["SaveAccountHolder"] = 'SaveAccountHolder'] = "SaveAccountHolder";
        EventEnum[EventEnum["SaveCriminalityAndPepChecks"] = 'SaveCriminalityAndPEPChecks'] = "SaveCriminalityAndPepChecks";
        EventEnum[EventEnum["SaveKycCheckStatus"] = 'SaveKYCCheckStatus'] = "SaveKycCheckStatus";
        EventEnum[EventEnum["SuspendAccount"] = 'SuspendAccount'] = "SuspendAccount";
        EventEnum[EventEnum["UnSuspendAccount"] = 'UnSuspendAccount'] = "UnSuspendAccount";
        EventEnum[EventEnum["UpdateAccountHolderState"] = 'UpdateAccountHolderState'] = "UpdateAccountHolderState";
        EventEnum[EventEnum["Verification"] = 'Verification'] = "Verification";
    })(EventEnum = AccountHolderUpcomingDeadlineNotificationContent.EventEnum || (AccountHolderUpcomingDeadlineNotificationContent.EventEnum = {}));
})(AccountHolderUpcomingDeadlineNotificationContent = exports.AccountHolderUpcomingDeadlineNotificationContent || (exports.AccountHolderUpcomingDeadlineNotificationContent = {}));
//# sourceMappingURL=accountHolderUpcomingDeadlineNotificationContent.js.map