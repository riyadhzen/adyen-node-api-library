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
const nock_1 = __importDefault(require("nock"));
const base_1 = require("../__mocks__/base");
const payout_1 = __importDefault(require("../services/payout"));
const client_1 = __importDefault(require("../client"));
const apiConstants_1 = require("../constants/apiConstants");
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
const storeDetailAndSubmitThirdParty = JSON.stringify({
    additionalData: {
        fraudResultType: "GREEN",
        fraudManualReview: "false",
    },
    pspReference: "8515131751004933",
    resultCode: "[payout-submit-received]"
});
const storeDetail = JSON.stringify({
    pspReference: "8515136787207087",
    recurringDetailReference: "8415088571022720",
    resultCode: "Success"
});
const amountAndReference = {
    amount: {
        value: 100,
        currency: "EUR"
    },
    reference: "randomReference",
};
const defaultData = {
    dateOfBirth: (new Date()).toISOString(),
    nationality: "NL",
    shopperEmail: "johndoe@email.com",
    shopperReference: "shopperReference",
};
const mockStoreDetailRequest = (merchantAccount = process.env.ADYEN_MERCHANT) => ({
    ...defaultData,
    card: {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2020",
        number: "4111111111111111",
        holderName: "John Smith"
    },
    entityType: "Company",
    recurring: {
        contract: "PAYOUT"
    },
    merchantAccount,
});
const mockSubmitRequest = (merchantAccount = process.env.ADYEN_MERCHANT) => ({
    selectedRecurringDetailReference: "LATEST",
    recurring: {
        contract: "PAYOUT"
    },
    ...defaultData,
    ...amountAndReference,
    merchantAccount,
});
const mockStoreDetailAndSubmitRequest = (merchantAccount) => ({
    ...amountAndReference,
    ...(mockStoreDetailRequest(merchantAccount)),
});
const mockPayoutRequest = (merchantAccount = process.env.ADYEN_MERCHANT) => ({
    ...amountAndReference,
    ...defaultData,
    card: {
        expiryMonth: "03",
        expiryYear: "2030",
        holderName: "John Smith",
        number: "4111111111111111",
    },
    merchantAccount,
});
let client;
let clientStore;
let clientReview;
let payout;
let scope;
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)();
    clientStore = (0, base_1.createClient)(process.env.ADYEN_STOREPAYOUT_APIKEY);
    clientReview = (0, base_1.createClient)(process.env.ADYEN_REVIEWPAYOUT_APIKEY);
    scope = (0, nock_1.default)(`${client.config.endpoint}/pal/servlet/Payout/${client_1.default.API_VERSION}`);
    payout = new payout_1.default(client);
});
afterEach(() => {
    nock_1.default.cleanAll();
});
describe("PayoutTest", function () {
    test.each([isCI, true])("should succeed on store detail and submit third party, isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        payout = new payout_1.default(clientStore);
        const request = mockStoreDetailAndSubmitRequest();
        scope.post("/storeDetailAndSubmitThirdParty").reply(200, storeDetailAndSubmitThirdParty);
        const result = await payout.storeDetailAndSubmitThirdParty(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();
    });
    test.each([false, true])("should succeed on store detail, isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        payout = new payout_1.default(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const request = mockStoreDetailRequest();
        const result = await payout.storeDetail(request);
        expect("Success").toEqual(result.resultCode);
        expect(result.pspReference).toBeTruthy();
        expect(result.recurringDetailReference).toBeTruthy();
    });
    test.each([isCI, true])("should succeed on confirm third party, isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        payout = new payout_1.default(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const storeRequest = mockStoreDetailRequest();
        const storeResult = await payout.storeDetail(storeRequest);
        payout = new payout_1.default(clientReview);
        scope.post("/confirmThirdParty")
            .reply(200, {
            pspReference: "8815131762537886",
            response: "[payout-confirm-received]"
        });
        const request = {
            merchantAccount: process.env.ADYEN_MERCHANT,
            originalReference: storeResult.pspReference
        };
        const result = await payout.confirmThirdParty(request);
        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toBeTruthy();
    });
    test.each([isCI, true])("should succeed on submit third party, isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        payout = new payout_1.default(clientStore);
        scope.post("/submitThirdParty").reply(200, storeDetailAndSubmitThirdParty);
        const request = mockSubmitRequest();
        const result = await payout.submitThirdparty(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();
        if (result.additionalData) {
            expect(result.additionalData[apiConstants_1.ApiConstants.FRAUD_RESULT_TYPE]).toEqual("GREEN");
            expect(result.additionalData[apiConstants_1.ApiConstants.FRAUD_MANUAL_REVIEW]).toEqual("false");
        }
    });
    test.each([false, true])("should succeed on decline third party, isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        payout = new payout_1.default(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const storeRequest = mockStoreDetailRequest();
        const storeResult = await payout.storeDetail(storeRequest);
        payout = new payout_1.default(clientReview);
        const request = {
            merchantAccount: process.env.ADYEN_MERCHANT,
            originalReference: storeResult.pspReference
        };
        scope.post("/declineThirdParty")
            .reply(200, {
            pspReference: "8815131762537886",
            response: "[payout-decline-received]"
        });
        const result = await payout.declineThirdParty(request);
        expect(result.response).toEqual("[payout-decline-received]");
        expect(result.pspReference).toBeTruthy();
    });
    test.each([isCI, true])("should succeed on payout, isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        scope.post("/payout").reply(200, {
            pspReference: "8815131762537886",
            resultCode: "Received",
        });
        const request = mockPayoutRequest();
        const result = await payout.payout(request);
        expect(result.resultCode).toEqual("Received");
        expect(result.pspReference).toBeTruthy();
    });
});
//# sourceMappingURL=payout.spec.js.map