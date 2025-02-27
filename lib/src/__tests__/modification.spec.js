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
const modification_1 = __importDefault(require("../services/modification"));
const client_1 = __importDefault(require("../client"));
const models_1 = require("../typings/checkout/models");
const invalidModificationResult = {
    "status": 422,
    "errorCode": "167",
    "message": "Original pspReference required for this operation",
    "errorType": "validation"
};
const createAmountUpdateRequest = () => {
    return {
        reference: "863620292981235A",
        merchantAccount: process.env.ADYEN_MERCHANT,
        amount: {
            currency: "EUR",
            value: 420
        },
        reason: models_1.CreatePaymentAmountUpdateRequest.ReasonEnum.DelayedCharge
    };
};
const createAmountUpdateResponse = () => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        amount: {
            currency: "EUR",
            value: 420,
        },
        reason: models_1.CreatePaymentAmountUpdateRequest.ReasonEnum.DelayedCharge,
        status: models_1.PaymentAmountUpdateResource.StatusEnum.Received,
    };
};
const createCancelsRequest = () => {
    return {
        reference: "863620292981235B",
        merchantAccount: process.env.ADYEN_MERCHANT,
    };
};
const createCancelsResponse = () => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT,
        pspReference: "863620292981235B",
        paymentPspReference: "863620292981235A",
        status: models_1.PaymentCancelResource.StatusEnum.Received,
    };
};
const createStandaloneCancelsRequest = () => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        paymentReference: "863620292981235B",
    };
};
const createStandaloneCancelsResponse = () => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        paymentReference: "863620292981235B",
        pspReference: "863620292981235A",
        status: models_1.StandalonePaymentCancelResource.StatusEnum.Received,
    };
};
const createCapturesRequest = () => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};
function createCapturesResponse() {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: models_1.PaymentCaptureResource.StatusEnum.Received,
    };
}
const createRefundsRequest = () => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};
const createRefundsResponse = () => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: models_1.PaymentRefundResource.StatusEnum.Received,
    };
};
const createReversalsRequest = () => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT
    };
};
const createReversalsResponse = () => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT,
        status: models_1.PaymentRefundResource.StatusEnum.Received,
    };
};
let client;
let modification;
let scope;
const paymentPspReference = "863620292981235A";
const invalidPaymentPspReference = "invalid_psp_reference";
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)();
    modification = new modification_1.default(client);
    scope = (0, nock_1.default)(`${client.config.checkoutEndpoint}/${client_1.default.CHECKOUT_API_VERSION}`);
});
afterEach(() => {
    nock_1.default.cleanAll();
});
describe("Modification", () => {
    test.each([isCI, true])("should perform an amount update request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const request = createAmountUpdateRequest();
        scope.post(`/payments/${paymentPspReference}/amountUpdates`)
            .reply(200, createAmountUpdateResponse());
        try {
            const result = await modification.amountUpdates(paymentPspReference, request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            if (e.message)
                fail(e.message);
        }
    });
    test.each([false, true])("should fail to perform an amount update request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        expect.assertions(2);
        const request = createAmountUpdateRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/amountUpdates`)
            .reply(422, invalidModificationResult);
        try {
            await modification.amountUpdates(invalidPaymentPspReference, request);
        }
        catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
    test.each([isCI, true])("should perform a cancels request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const request = createCancelsRequest();
        scope.post(`/payments/${paymentPspReference}/cancels`)
            .reply(200, createCancelsResponse());
        try {
            const result = await modification.cancels(paymentPspReference, request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
    test.each([false, true])("should fail to perform a cancels request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        expect.assertions(2);
        const request = createCancelsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/cancels`)
            .reply(422, invalidModificationResult);
        try {
            await modification.cancels(invalidPaymentPspReference, request);
        }
        catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
    test.each([isCI, true])("should perform a standalone cancels request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const request = createStandaloneCancelsRequest();
        scope.post("/cancels")
            .reply(200, createStandaloneCancelsResponse());
        try {
            const result = await modification.cancelsStandalone(request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
    test.each([isCI, true])("should perform a captures request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const request = createCapturesRequest();
        scope.post(`/payments/${paymentPspReference}/captures`)
            .reply(200, createCapturesResponse());
        try {
            const result = await modification.captures(paymentPspReference, request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
    test.each([false, true])("should fail to perform a captures request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        expect.assertions(2);
        const request = createCapturesRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/captures`)
            .reply(422, invalidModificationResult);
        try {
            await modification.captures(invalidPaymentPspReference, request);
        }
        catch (e) {
            if (e.statusCode)
                expect(e.statusCode).toBe(422);
            if (e.message)
                expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
    test.each([isCI, true])("should perform a refunds request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const request = createRefundsRequest();
        scope.post(`/payments/${paymentPspReference}/refunds`)
            .reply(200, createRefundsResponse());
        try {
            const result = await modification.refunds(paymentPspReference, request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            if (e.message)
                fail(e.message);
        }
    });
    test.each([false, true])("should fail to perform a refunds request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        expect.assertions(2);
        const request = createRefundsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/refunds`)
            .reply(422, invalidModificationResult);
        try {
            await modification.refunds(invalidPaymentPspReference, request);
        }
        catch (e) {
            if (e.statusCode)
                expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
    test.each([isCI, true])("should perform a reversals request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const request = createReversalsRequest();
        scope.post(`/payments/${paymentPspReference}/reversals`)
            .reply(200, createReversalsResponse());
        try {
            const result = await modification.reversals(paymentPspReference, request);
            expect(result).toBeTruthy();
        }
        catch (e) {
            fail(e.message);
        }
    });
    test.each([false, true])("should fail to perform a reversals request, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        expect.assertions(2);
        const request = createReversalsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/reversals`)
            .reply(422, invalidModificationResult);
        try {
            await modification.reversals(invalidPaymentPspReference, request);
        }
        catch (e) {
            if (e.statusCode)
                expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
});
//# sourceMappingURL=modification.spec.js.map