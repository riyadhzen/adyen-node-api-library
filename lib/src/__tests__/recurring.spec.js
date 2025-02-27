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
const disableSuccess_1 = require("../__mocks__/recurring/disableSuccess");
const listRecurringDetailsSuccess_1 = require("../__mocks__/recurring/listRecurringDetailsSuccess");
const notifyShopperSuccess_1 = require("../__mocks__/recurring/notifyShopperSuccess");
const recurring_1 = __importDefault(require("../services/recurring"));
const client_1 = __importDefault(require("../client"));
const paymentsSuccess_1 = require("../__mocks__/checkout/paymentsSuccess");
const checkout_spec_1 = require("./checkout.spec");
const checkout_1 = __importDefault(require("../services/checkout"));
const models_1 = require("../typings/recurring/models");
const createRecurringDetailsRequest = () => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT,
        recurring: { contract: models_1.Recurring.ContractEnum.Recurring },
        shopperReference: "shopperReference",
    };
};
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
let client;
let recurring;
let checkout;
let scope;
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)();
    recurring = new recurring_1.default(client);
    checkout = new checkout_1.default(client);
    scope = (0, nock_1.default)(`${client.config.endpoint}/pal/servlet/Recurring/${client_1.default.RECURRING_API_VERSION}`);
});
afterEach(() => {
    nock_1.default.cleanAll();
});
describe("Recurring", () => {
    test("should list recurring details ", async () => {
        var _a;
        scope.post("/listRecurringDetails")
            .reply(200, listRecurringDetailsSuccess_1.listRecurringDetailsSuccess);
        const request = createRecurringDetailsRequest();
        const result = await recurring.listRecurringDetails(request);
        expect(result).toBeTruthy();
        expect((_a = result.details) === null || _a === void 0 ? void 0 : _a[0].RecurringDetail.recurringDetailReference).toBe('recurringReference');
    });
    test.each([isCI, true])("should disable, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/payments")
            .reply(200, paymentsSuccess_1.paymentsSuccess);
        const paymentsRequest = (0, checkout_spec_1.createPaymentsCheckoutRequest)();
        const res = await checkout.payments(paymentsRequest);
        scope.post("/disable")
            .reply(200, disableSuccess_1.disableSuccess);
        const request = {
            merchantAccount: process.env.ADYEN_MERCHANT,
            shopperReference: "shopperReference",
            recurringDetailReference: res.additionalData["recurring.recurringDetailReference"]
        };
        try {
            const result = await recurring.disable(request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
    test.each([isCI, true])("should send pre-debit Notification, isMock %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/notifyShopper")
            .reply(200, notifyShopperSuccess_1.notifyShopperSuccess);
        const notifyShopperRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT,
            shopperReference: "shopperReference",
            storedPaymentMethodId: "8415995487234100",
            amount: {
                currency: "INR",
                value: 1000
            },
            billingDate: "2021-03-16",
            reference: "Example reference",
            displayedReference: "Example displayed reference"
        };
        try {
            const result = await recurring.notifyShopper(notifyShopperRequest);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
    // TODO: register account for AccountUpdater and unmock test
    test.each([true])("should schedule account updater, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const scheduleAccountUpdaterSuccess = {
            pspReference: "mocked_psp",
            result: "SUCCESS"
        };
        scope.post("/scheduleAccountUpdater")
            .reply(200, scheduleAccountUpdaterSuccess);
        const request = {
            merchantAccount: process.env.ADYEN_MERCHANT,
            reference: "ref",
            card: {
                expiryMonth: "03",
                expiryYear: "2030",
                holderName: "John Smith",
                number: "4111111111111111"
            }
        };
        try {
            const result = await recurring.scheduleAccountUpdater(request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
});
//# sourceMappingURL=recurring.spec.js.map