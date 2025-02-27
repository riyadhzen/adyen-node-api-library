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
 * Copyright (c) 2022 Adyen N.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nock_1 = __importDefault(require("nock"));
const base_1 = require("../__mocks__/base");
const async_1 = require("../__mocks__/terminalApi/async");
const sync_1 = require("../__mocks__/terminalApi/sync");
const terminalCloudAPI_1 = __importDefault(require("../services/terminalCloudAPI"));
let client;
let terminalCloudAPI;
let scope;
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)(process.env.ADYEN_TERMINAL_APIKEY);
    client.config.merchantAccount = process.env.ADYEN_TERMINAL_MERCHANT;
    terminalCloudAPI = new terminalCloudAPI_1.default(client);
    scope = (0, nock_1.default)(`${client.config.terminalApiCloudEndpoint}`);
});
afterEach(() => {
    nock_1.default.cleanAll();
});
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
describe("Terminal Cloud API", () => {
    test.each([isCI, true])("should make an async payment request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/async").reply(200, async_1.asyncRes);
        const terminalAPIPaymentRequest = (0, base_1.createTerminalAPIPaymentRequest)();
        const requestResponse = await terminalCloudAPI.async(terminalAPIPaymentRequest);
        expect(requestResponse).toEqual("ok");
    });
    test.each([isCI, true])("should make a sync payment request, isMock: %p", async (isMock) => {
        var _a, _b;
        !isMock && nock_1.default.restore();
        scope.post("/sync").reply(200, sync_1.syncRes);
        const terminalAPIPaymentRequest = (0, base_1.createTerminalAPIPaymentRequest)();
        const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);
        expect((_a = terminalAPIResponse.SaleToPOIResponse) === null || _a === void 0 ? void 0 : _a.PaymentResponse).toBeDefined();
        expect((_b = terminalAPIResponse.SaleToPOIResponse) === null || _b === void 0 ? void 0 : _b.MessageHeader).toBeDefined();
    });
    test.each([isCI, true])("should return event notification if response contains it, isMock: %p", async (isMock) => {
        var _a;
        !isMock && nock_1.default.restore();
        const terminalAPIPaymentRequest = (0, base_1.createTerminalAPIPaymentRequest)();
        scope.post("/sync").reply(200, sync_1.syncResEventNotification);
        const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);
        expect((_a = terminalAPIResponse.SaleToPOIRequest) === null || _a === void 0 ? void 0 : _a.EventNotification).toBeDefined();
    });
    test.each([isCI, true])("should make an async refund request, isMock: %p", async (isMock) => {
        var _a, _b, _c;
        !isMock && nock_1.default.restore();
        scope.post("/sync").reply(200, sync_1.syncRes);
        const terminalAPIPaymentRequest = (0, base_1.createTerminalAPIPaymentRequest)();
        const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);
        scope.post("/sync").reply(200, sync_1.syncRefund);
        const pOITransactionId = (_b = (_a = terminalAPIResponse.SaleToPOIResponse) === null || _a === void 0 ? void 0 : _a.PaymentResponse) === null || _b === void 0 ? void 0 : _b.POIData.POITransactionID;
        if (pOITransactionId) {
            const terminalAPIRefundRequest = (0, base_1.createTerminalAPIRefundRequest)(pOITransactionId);
            const terminalAPIRefundResponse = await terminalCloudAPI.sync(terminalAPIRefundRequest);
            expect((_c = terminalAPIRefundResponse.SaleToPOIResponse) === null || _c === void 0 ? void 0 : _c.ReversalResponse).toBeDefined();
        }
        else {
            fail();
        }
    });
});
//# sourceMappingURL=terminalCloudAPI.spec.js.map