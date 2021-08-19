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

import {createClient} from "../../__mocks__/base";
import Modification from "../../services/modification";
import Client from "../../client";
import {
    CreatePaymentAmountUpdateRequest,
    CreatePaymentCancelRequest,
    CreatePaymentCaptureRequest,
    CreatePaymentRefundRequest,
    CreatePaymentReversalRequest,
    CreateStandalonePaymentCancelRequest,
    PaymentAmountUpdateResource,
    PaymentCancelResource,
    PaymentCaptureResource,
    PaymentRefundResource,
    PaymentReversalResource,
    StandalonePaymentCancelResource,
} from "../../typings/checkout/models";

const createAmountUpdateRequest = (): CreatePaymentAmountUpdateRequest => {
    return {
        reference: "863620292981235A",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420
        },
        reason: CreatePaymentAmountUpdateRequest.ReasonEnum.DelayedCharge
    };
};

const createCancelsRequest = (): CreatePaymentCancelRequest => {
     return {
         reference: "863620292981235B",
         merchantAccount: process.env.ADYEN_MERCHANT!,
     };
};

const createStandaloneCancelsRequest = (): CreateStandalonePaymentCancelRequest => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        paymentReference: "863620292981235B",
    };
};

const createCapturesRequest = (): CreatePaymentCaptureRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};

const createRefundsRequest = (): CreatePaymentRefundRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};

const createReversalsRequest = (): CreatePaymentReversalRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!
    };
};

let client: Client;
let modification: Modification;
const paymentPspReference = "863620292981235A";
const invalidPaymentPspReference = "invalid_psp_reference";

beforeEach((): void => {
    client = createClient(process.env.ADYEN_API_KEY);
    modification = new Modification(client);
});

describe("Modification", (): void => {
    test("should perform an amount update request", async (): Promise<void> => {
        const request: CreatePaymentAmountUpdateRequest = createAmountUpdateRequest();
        try {
            const result: PaymentAmountUpdateResource = await modification.amountUpdates(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test("should fail to perform an amount update request", async (): Promise<void> => {
        expect.assertions(2);
        const request: CreatePaymentAmountUpdateRequest = createAmountUpdateRequest();
        try {
            await modification.amountUpdates(invalidPaymentPspReference, request);
        } catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test("should perform a cancels request", async (): Promise<void> => {
        const request: CreatePaymentCancelRequest = createCancelsRequest();
        try {
            const result: PaymentCancelResource = await modification.cancels(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test("should fail to perform a cancels request", async (): Promise<void> => {
        expect.assertions(2);
        const request: CreatePaymentCancelRequest = createCancelsRequest();
        try {
            await modification.cancels(invalidPaymentPspReference, request);
        } catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test("should perform a standalone cancels request", async (): Promise<void> => {
        const request: CreateStandalonePaymentCancelRequest = createStandaloneCancelsRequest();
        try {
            const result: StandalonePaymentCancelResource = await modification.cancelsStandalone(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test("should perform a captures request", async (): Promise<void> => {
        const request: CreatePaymentCaptureRequest = createCapturesRequest();
        try {
            const result: PaymentCaptureResource = await modification.captures(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test("should fail to perform a captures request", async (): Promise<void> => {
        expect.assertions(2);
        const request: CreatePaymentCaptureRequest = createCapturesRequest();
        try {
            await modification.captures(invalidPaymentPspReference, request);
        } catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test("should perform a refunds request", async (): Promise<void> => {
        const request: CreatePaymentRefundRequest = createRefundsRequest();
        try {
            const result: PaymentRefundResource = await modification.refunds(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform a refunds request", async (): Promise<void> => {
        expect.assertions(2);
        const request: CreatePaymentRefundRequest = createRefundsRequest();
        try {
            await modification.refunds(invalidPaymentPspReference, request);
        } catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test("should perform a reversals request", async (): Promise<void> => {
        const request: CreatePaymentReversalRequest = createReversalsRequest();
        try {
            const result: PaymentReversalResource = await modification.reversals(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform a reversals request", async (): Promise<void> => {
        expect.assertions(2);
        const request: CreatePaymentReversalRequest = createReversalsRequest();;
        try {
            await modification.reversals(invalidPaymentPspReference, request);
        } catch (e) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
});
