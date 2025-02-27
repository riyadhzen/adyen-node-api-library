"use strict";
/*
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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRequestItem = void 0;
class NotificationRequestItem {
    static getAttributeTypeMap() {
        return NotificationRequestItem.attributeTypeMap;
    }
}
exports.NotificationRequestItem = NotificationRequestItem;
NotificationRequestItem.discriminator = undefined;
NotificationRequestItem.attributeTypeMap = [
    {
        "name": "additionalData",
        "baseName": "additionalData",
        "type": "AdditionalData"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "Amount"
    },
    {
        "name": "pspReference",
        "baseName": "pspReference",
        "type": "string"
    },
    {
        "name": "eventCode",
        "baseName": "eventCode",
        "type": "NotificationRequestItem.EventCodeEnum"
    },
    {
        "name": "eventDate",
        "baseName": "eventDate",
        "type": "string"
    },
    {
        "name": "merchantAccountCode",
        "baseName": "merchantAccountCode",
        "type": "string"
    },
    {
        "name": "operations",
        "baseName": "operations",
        "type": "Array<NotificationRequestItem.OperationsEnum>"
    },
    {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
    },
    {
        "name": "originalReference",
        "baseName": "originalReference",
        "type": "string"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "success",
        "baseName": "success",
        "type": "NotificationRequestItem.SuccessEnum"
    }
];
(function (NotificationRequestItem) {
    let EventCodeEnum;
    (function (EventCodeEnum) {
        EventCodeEnum[EventCodeEnum["Authorisation"] = 'AUTHORISATION'] = "Authorisation";
        EventCodeEnum[EventCodeEnum["AuthorisationAdjustment"] = 'AUTHORISATION_ADJUSTMENT'] = "AuthorisationAdjustment";
        EventCodeEnum[EventCodeEnum["Cancellation"] = 'CANCELLATION'] = "Cancellation";
        EventCodeEnum[EventCodeEnum["CancelOrRefund"] = 'CANCEL_OR_REFUND'] = "CancelOrRefund";
        EventCodeEnum[EventCodeEnum["Capture"] = 'CAPTURE'] = "Capture";
        EventCodeEnum[EventCodeEnum["CaptureFailed"] = 'CAPTURE_FAILED'] = "CaptureFailed";
        EventCodeEnum[EventCodeEnum["HandledExternally"] = 'HANDLED_EXTERNALLY'] = "HandledExternally";
        EventCodeEnum[EventCodeEnum["OrderOpened"] = 'ORDER_OPENED'] = "OrderOpened";
        EventCodeEnum[EventCodeEnum["OrderClosed"] = 'ORDER_CLOSED'] = "OrderClosed";
        EventCodeEnum[EventCodeEnum["Pending"] = 'PENDING'] = "Pending";
        EventCodeEnum[EventCodeEnum["ProcessRetry"] = 'PROCESS_RETRY'] = "ProcessRetry";
        EventCodeEnum[EventCodeEnum["Refund"] = 'REFUND'] = "Refund";
        EventCodeEnum[EventCodeEnum["RefundFailed"] = 'REFUND_FAILED'] = "RefundFailed";
        EventCodeEnum[EventCodeEnum["RefundedReversed"] = 'REFUNDED_REVERSED'] = "RefundedReversed";
        EventCodeEnum[EventCodeEnum["RefundWithData"] = 'REFUND_WITH_DATA'] = "RefundWithData";
        EventCodeEnum[EventCodeEnum["ReportAvailable"] = 'REPORT_AVAILABLE'] = "ReportAvailable";
        EventCodeEnum[EventCodeEnum["VoidPendingRefund"] = 'VOID_PENDING_REFUND'] = "VoidPendingRefund";
        EventCodeEnum[EventCodeEnum["Chargeback"] = 'CHARGEBACK'] = "Chargeback";
        EventCodeEnum[EventCodeEnum["ChargebackReversed"] = 'CHARGEBACK_REVERSED'] = "ChargebackReversed";
        EventCodeEnum[EventCodeEnum["NotificationOfChargeback"] = 'NOTIFICATION_OF_CHARGEBACK'] = "NotificationOfChargeback";
        EventCodeEnum[EventCodeEnum["NotificationOfFraud"] = 'NOTIFICATION_OF_FRAUD'] = "NotificationOfFraud";
        EventCodeEnum[EventCodeEnum["PrearbitrationLost"] = 'PREARBITRATION_LOST'] = "PrearbitrationLost";
        EventCodeEnum[EventCodeEnum["PrearbitrationWon"] = 'PREARBITRATION_WON'] = "PrearbitrationWon";
        EventCodeEnum[EventCodeEnum["RequestForInformation"] = 'REQUEST_FOR_INFORMATION'] = "RequestForInformation";
        EventCodeEnum[EventCodeEnum["SecondChargeback"] = 'SECOND_CHARGEBACK'] = "SecondChargeback";
        EventCodeEnum[EventCodeEnum["PayoutExpire"] = 'PAYOUT_EXPIRE'] = "PayoutExpire";
        EventCodeEnum[EventCodeEnum["PayoutDecline"] = 'PAYOUT_DECLINE'] = "PayoutDecline";
        EventCodeEnum[EventCodeEnum["PayoutThirdparty"] = 'PAYOUT_THIRDPARTY'] = "PayoutThirdparty";
        EventCodeEnum[EventCodeEnum["PaidoutReversed"] = 'PAIDOUT_REVERSED'] = "PaidoutReversed";
        EventCodeEnum[EventCodeEnum["Autorescue"] = 'AUTORESCUE'] = "Autorescue";
        EventCodeEnum[EventCodeEnum["CancelAutorescue"] = 'CANCEL_AUTORESCUE'] = "CancelAutorescue";
        EventCodeEnum[EventCodeEnum["RecurringContract"] = 'RECURRING_CONTRACT'] = "RecurringContract";
        EventCodeEnum[EventCodeEnum["PostponedRefund"] = 'POSTPONED_REFUND'] = "PostponedRefund";
        EventCodeEnum[EventCodeEnum["OfferClosed"] = 'OFFER_CLOSED'] = "OfferClosed";
        EventCodeEnum[EventCodeEnum["ManualReviewAccept"] = 'MANUAL_REVIEW_ACCEPT'] = "ManualReviewAccept";
        EventCodeEnum[EventCodeEnum["ManualReviewReject"] = 'MANUAL_REVIEW_REJECT'] = "ManualReviewReject";
    })(EventCodeEnum = NotificationRequestItem.EventCodeEnum || (NotificationRequestItem.EventCodeEnum = {}));
    let OperationsEnum;
    (function (OperationsEnum) {
        OperationsEnum[OperationsEnum["Cancel"] = 'CANCEL'] = "Cancel";
        OperationsEnum[OperationsEnum["Capture"] = 'CAPTURE'] = "Capture";
        OperationsEnum[OperationsEnum["Refund"] = 'REFUND'] = "Refund";
    })(OperationsEnum = NotificationRequestItem.OperationsEnum || (NotificationRequestItem.OperationsEnum = {}));
    let SuccessEnum;
    (function (SuccessEnum) {
        SuccessEnum[SuccessEnum["True"] = 'true'] = "True";
        SuccessEnum[SuccessEnum["False"] = 'false'] = "False";
    })(SuccessEnum = NotificationRequestItem.SuccessEnum || (NotificationRequestItem.SuccessEnum = {}));
})(NotificationRequestItem = exports.NotificationRequestItem || (exports.NotificationRequestItem = {}));
//# sourceMappingURL=notificationRequestItem.js.map