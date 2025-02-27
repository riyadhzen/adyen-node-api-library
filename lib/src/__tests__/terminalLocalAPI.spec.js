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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nock_1 = __importDefault(require("nock"));
const base_1 = require("../__mocks__/base");
const local_1 = require("../__mocks__/terminalApi/local");
const terminalLocalAPI_1 = __importDefault(require("../services/terminalLocalAPI"));
const nexoCryptoException_1 = __importDefault(require("../services/exception/nexoCryptoException"));
let client;
let terminalLocalAPI;
let scope;
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)();
    terminalLocalAPI = new terminalLocalAPI_1.default(client);
    scope = (0, nock_1.default)(client.config.terminalApiLocalEndpoint + ":8443/nexo");
});
afterEach(() => {
    nock_1.default.cleanAll();
});
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
describe("Terminal Local API", () => {
    test.each([isCI, true])("should make a local payment, isMock: %p", async (isMock) => {
        var _a, _b;
        !isMock && nock_1.default.restore();
        scope.post("/").reply(200, local_1.localEncRes);
        const terminalAPIPaymentRequest = (0, base_1.createTerminalAPIPaymentRequest)();
        const securityKey = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };
        const terminalApiResponse = await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);
        expect((_a = terminalApiResponse.SaleToPOIResponse) === null || _a === void 0 ? void 0 : _a.PaymentResponse).toBeDefined();
        expect((_b = terminalApiResponse.SaleToPOIResponse) === null || _b === void 0 ? void 0 : _b.MessageHeader).toBeDefined();
    });
    test.each([isCI, true])("should return NexoCryptoException, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/").reply(200, local_1.wrongEncRes);
        const terminalAPIPaymentRequest = (0, base_1.createTerminalAPIPaymentRequest)();
        const securityKey = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };
        try {
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);
        }
        catch (e) {
            expect(e instanceof nexoCryptoException_1.default);
            expect(e.message).toEqual("Hmac validation failed");
        }
    });
});
//# sourceMappingURL=terminalLocalAPI.spec.js.map