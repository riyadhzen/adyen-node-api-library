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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hmacValidator_1 = __importDefault(require("../utils/hmacValidator"));
const models_1 = require("../typings/notification/models");
const apiConstants_1 = require("../constants/apiConstants");
const notificationRequest_1 = __importDefault(require("../notification/notificationRequest"));
const key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
const expectedSign = "ZNBPtI+oDyyRrLyD1XirkKnQgIAlFc07Vj27TeHsDRE=";
const notificationRequestItem = {
    NotificationRequestItem: {
        pspReference: "pspReference",
        originalReference: "originalReference",
        merchantAccountCode: "merchantAccount",
        merchantReference: "reference",
        amount: { currency: "EUR", value: 1000 },
        eventCode: models_1.NotificationRequestItem.EventCodeEnum.ReportAvailable,
        eventDate: "2019-09-21T11:45:24.637Z",
        paymentMethod: "VISA",
        reason: "reason",
        success: models_1.NotificationRequestItem.SuccessEnum.True,
        additionalData: { [apiConstants_1.ApiConstants.HMAC_SIGNATURE]: expectedSign },
    }
};
const notification = new notificationRequest_1.default({
    live: "false",
    notificationItems: [notificationRequestItem]
});
describe("HMAC Validator", function () {
    let hmacValidator;
    beforeEach(() => {
        hmacValidator = new hmacValidator_1.default();
    });
    it("should get correct data", function () {
        const dataToSign = hmacValidator.getDataToSign({ merchantAccount: "ACC", currencyCode: "EUR" });
        expect(dataToSign).toEqual("currencyCode:merchantAccount:EUR:ACC");
    });
    it("should get correct data with escaped characters", function () {
        const dataToSign = hmacValidator.getDataToSign({ currencyCode: "EUR", merchantAccount: "ACC:\\", sessionValidity: "2019-09-21T11:45:24.637Z" });
        expect(dataToSign).toEqual("currencyCode:merchantAccount:sessionValidity:EUR:ACC\\:\\\\:2019-09-21T11\\:45\\:24.637Z");
    });
    it("should encrypt correctly", function () {
        const data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        const encrypted = hmacValidator.calculateHmac(data, "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00");
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });
    it("should get correct data to sign", function () {
        const data = hmacValidator.getDataToSign(notification.notificationItems[0]);
        expect(data).toEqual("pspReference:originalReference:merchantAccount:reference:1000:EUR:REPORT_AVAILABLE:true");
    });
    it("should have valid hmac", function () {
        const encrypted = hmacValidator.calculateHmac(notification.notificationItems[0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeTruthy();
    });
    it("should have invalid hmac", function () {
        const invalidNotification = {
            ...notification.notificationItems[0],
            additionalData: { [apiConstants_1.ApiConstants.HMAC_SIGNATURE]: "notValidSign" }
        };
        const result = hmacValidator.validateHMAC(invalidNotification, key);
        expect(result).toBeFalsy();
    });
    it("should throw error with missing hmac signature", function () {
        expect.assertions(1);
        const notificationRequestItemNoAdditionalData = {
            pspReference: "pspReference",
            originalReference: "originalReference",
            merchantAccountCode: "merchantAccount",
            merchantReference: "reference",
            amount: { currency: "EUR", value: 1000 },
            eventCode: models_1.NotificationRequestItem.EventCodeEnum.ReportAvailable,
            eventDate: "2019-09-21T11:45:24.637Z",
            paymentMethod: "VISA",
            reason: "reason",
            success: models_1.NotificationRequestItem.SuccessEnum.True,
            additionalData: {},
        };
        try {
            hmacValidator.validateHMAC(notificationRequestItemNoAdditionalData, key);
        }
        catch (error) {
            expect(error.message).toEqual(`Missing ${apiConstants_1.ApiConstants.HMAC_SIGNATURE}`);
        }
    });
    it("should test hmac", function () {
        const data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        const key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
        const hmacValidator = new hmacValidator_1.default();
        const encrypted = hmacValidator.calculateHmac(data, key);
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });
    it("should validate HMAC", function () {
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeTruthy();
    });
    it("should have valid notification request item HMAC", function () {
        const expectedSign = "ipnxGCaUZ4l8TUW75a71/ghd2Fe5ffvX0pV4TLTntIc=";
        const notificationRequestItem = { NotificationRequestItem: {
                pspReference: "pspReference",
                originalReference: "originalReference",
                merchantAccountCode: "merchantAccount",
                merchantReference: "reference",
                amount: { currency: "EUR", value: 1000 },
                eventCode: "EVENT",
                success: "true",
                additionalData: { [apiConstants_1.ApiConstants.HMAC_SIGNATURE]: expectedSign }
            } };
        const notification = new notificationRequest_1.default({
            live: "false",
            notificationItems: [notificationRequestItem]
        });
        const data = hmacValidator.getDataToSign(notification.notificationItems[0]);
        expect("pspReference:originalReference:merchantAccount:reference:1000:EUR:EVENT:true").toEqual(data);
        const encrypted = hmacValidator.calculateHmac(notification.notificationItems[0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeTruthy();
        notification.notificationItems[0].additionalData[apiConstants_1.ApiConstants.HMAC_SIGNATURE] = "notValidSign";
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeFalsy();
    });
});
//# sourceMappingURL=hmacValidator.spec.js.map