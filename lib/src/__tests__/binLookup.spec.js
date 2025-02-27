"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const nock_1 = __importDefault(require("nock"));
const base_1 = require("../__mocks__/base");
const binLookup_1 = __importDefault(require("../services/binLookup"));
const client_1 = __importDefault(require("../client"));
const httpClientException_1 = __importDefault(require("../httpClient/httpClientException"));
const threeDSAvailabilitySuccess = {
    binDetails: {
        issuerCountry: "NL"
    },
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [],
    threeDS2supported: false
};
let client;
let binLookup;
let scope;
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)();
    binLookup = new binLookup_1.default(client);
    scope = (0, nock_1.default)(`${client.config.endpoint}${client_1.default.BIN_LOOKUP_PAL_SUFFIX}${client_1.default.BIN_LOOKUP_API_VERSION}`);
});
afterEach(() => {
    nock_1.default.cleanAll();
});
describe("Bin Lookup", function () {
    test.each([false, true])("should succeed on get 3ds availability. isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        const threeDSAvailabilityRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT,
            brands: ["randomBrand"],
            cardNumber: "4111111111111111"
        };
        scope.post("/get3dsAvailability")
            .reply(200, threeDSAvailabilitySuccess);
        const response = await binLookup.get3dsAvailability(threeDSAvailabilityRequest);
        expect(response).toEqual(threeDSAvailabilitySuccess);
    });
    test.each([false, true])("should fail with invalid merchant. isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        const threeDSAvailabilityRequest = {
            merchantAccount: undefined,
            cardNumber: "4111111111111",
            brands: []
        };
        scope.post("/get3dsAvailability")
            .reply(403, JSON.stringify({ status: 403, message: "fail", errorCode: "171" }));
        try {
            await binLookup.get3dsAvailability(threeDSAvailabilityRequest);
            fail("Expected request to fail");
        }
        catch (e) {
            expect(e instanceof httpClientException_1.default).toBeTruthy();
        }
    });
    test.each([false, true])("should succeed on get cost estimate. isMock: %p", async function (isMock) {
        !isMock && nock_1.default.restore();
        const expected = {
            cardBin: {
                bin: "",
                fundsAvailability: "I",
                issuingBank: "ADYEN TEST BANK",
                issuingCountry: "NL",
                paymentMethod: "visa",
                payoutEligible: "Y",
                summary: "",
            },
            costEstimateAmount: {
                currency: "EUR",
                value: 10
            },
            resultCode: "Unsupported",
            surchargeType: "ZERO"
        };
        const costEstimateRequest = {
            amount: { currency: "EUR", value: 1000 },
            assumptions: {
                assumeLevel3Data: true,
                assume3DSecureAuthenticated: true
            },
            cardNumber: "411111111111",
            merchantAccount: process.env.ADYEN_MERCHANT,
            merchantDetails: {
                countryCode: "NL",
                mcc: "7411",
                enrolledIn3DSecure: true
            },
            shopperInteraction: "Ecommerce"
        };
        scope.post("/getCostEstimate")
            .reply(200, expected);
        const response = await binLookup.getCostEstimate(costEstimateRequest);
        expect(response).toEqual(expected);
    });
});
//# sourceMappingURL=binLookup.spec.js.map