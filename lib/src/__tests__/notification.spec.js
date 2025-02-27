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
const authorisationTrue_json_1 = __importDefault(require("../__mocks__/notification/authorisationTrue.json"));
const captureTrue_json_1 = __importDefault(require("../__mocks__/notification/captureTrue.json"));
const captureFalse_json_1 = __importDefault(require("../__mocks__/notification/captureFalse.json"));
const refundTrue_json_1 = __importDefault(require("../__mocks__/notification/refundTrue.json"));
const refundFalse_json_1 = __importDefault(require("../__mocks__/notification/refundFalse.json"));
const notificationRequest_1 = __importDefault(require("../notification/notificationRequest"));
const models_1 = require("../typings/notification/models");
var NotificationEnum = models_1.NotificationRequestItem.EventCodeEnum;
var SuccessEnum = models_1.NotificationRequestItem.SuccessEnum;
describe("Notification Test", function () {
    it("should return authorisation success", function () {
        const notificationRequest = new notificationRequest_1.default(authorisationTrue_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Authorisation).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("123456789");
            expect(notificationRequestItem.additionalData.paymentLinkId).toEqual("ABCDEFG");
        }
        else {
            fail();
        }
    });
    it("should return capture success", function () {
        const notificationRequest = new notificationRequest_1.default(captureTrue_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Capture).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        }
        else {
            fail();
        }
    });
    it("should return capture fail", function () {
        const notificationRequest = new notificationRequest_1.default(captureFalse_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Capture).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        }
        else {
            fail();
        }
    });
    it("should return refund success", function () {
        const notificationRequest = new notificationRequest_1.default(refundTrue_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Refund).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        }
        else {
            fail();
        }
    });
    it("should return refund fail", function () {
        const notificationRequest = new notificationRequest_1.default(refundFalse_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Refund).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        }
        else {
            fail();
        }
    });
});
//# sourceMappingURL=notification.spec.js.map