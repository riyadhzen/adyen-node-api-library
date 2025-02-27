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
exports.createPaymentsCheckoutRequest = void 0;
const nock_1 = __importDefault(require("nock"));
const base_1 = require("../__mocks__/base");
const paymentMethodsSuccess_1 = require("../__mocks__/checkout/paymentMethodsSuccess");
const paymentsSuccess_1 = require("../__mocks__/checkout/paymentsSuccess");
const paymentsDetailsSuccess_1 = require("../__mocks__/checkout/paymentsDetailsSuccess");
const paymentSessionSucess_1 = require("../__mocks__/checkout/paymentSessionSucess");
const originkeysSuccess_1 = require("../__mocks__/checkout/originkeysSuccess");
const paymentsResultMultibancoSuccess_1 = require("../__mocks__/checkout/paymentsResultMultibancoSuccess");
const paymentsResultSucess_1 = require("../__mocks__/checkout/paymentsResultSucess");
const sessionsSuccess_1 = require("../__mocks__/checkout/sessionsSuccess");
const client_1 = __importDefault(require("../client"));
const checkout_1 = __importDefault(require("../services/checkout"));
const httpClientException_1 = __importDefault(require("../httpClient/httpClientException"));
const models_1 = require("../typings/checkout/models");
const merchantAccount = process.env.ADYEN_MERCHANT;
const reference = "Your order number";
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
function createAmountObject(currency, value) {
    return {
        currency,
        value,
    };
}
function createPaymentsDetailsRequest() {
    return {
        details: {
            mD: "mdValue",
            paRes: "paResValue",
        },
        paymentData: "Ab02b4c0!BQABAgCJN1wRZuGJmq8dMncmypvknj9s7l5Tj...",
    };
}
function createPaymentsCheckoutRequest() {
    const paymentMethodDetails = {
        type: models_1.CardDetails.TypeEnum.Scheme,
        encryptedCardNumber: "test_4111111111111111",
        encryptedExpiryMonth: "test_03",
        encryptedExpiryYear: "test_2030",
        encryptedSecurityCode: "test_737"
    };
    return {
        amount: createAmountObject("USD", 1000),
        merchantAccount,
        paymentMethod: paymentMethodDetails,
        reference,
        returnUrl: "https://your-company.com/...",
        shopperReference: "shopperReference",
        storePaymentMethod: true
    };
}
exports.createPaymentsCheckoutRequest = createPaymentsCheckoutRequest;
function createPaymentSessionRequest() {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
        channel: models_1.PaymentSetupRequest.ChannelEnum.Web,
        sdkVersion: "3.7.0"
    };
}
function getPaymentLinkSuccess(expiresAt) {
    return {
        amount: createAmountObject("USD", 1000),
        expiresAt,
        reference,
        url: "PaymentLinkResponse.url",
        id: "mocked_id",
        merchantAccount,
        status: models_1.PaymentLinkResponse.StatusEnum.Active
    };
}
function createPaymentLinkRequest() {
    return {
        allowedPaymentMethods: ["scheme", "boletobancario"],
        amount: createAmountObject("USD", 1000),
        countryCode: "BR",
        merchantAccount,
        shopperReference: "shopperReference",
        shopperEmail: "test@email.com",
        shopperLocale: "pt_BR",
        billingAddress: {
            street: "Roque Petroni Jr",
            postalCode: "59000060",
            city: "São Paulo",
            houseNumberOrName: "999",
            country: "BR",
            stateOrProvince: "SP"
        },
        deliveryAddress: {
            street: "Roque Petroni Jr",
            postalCode: "59000060",
            city: "São Paulo",
            houseNumberOrName: "999",
            country: "BR",
            stateOrProvince: "SP"
        },
        reference
    };
}
function createSessionRequest() {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
    };
}
let client;
let checkout;
let scope;
beforeEach(() => {
    if (!nock_1.default.isActive()) {
        nock_1.default.activate();
    }
    client = (0, base_1.createClient)();
    scope = (0, nock_1.default)(`${client.config.checkoutEndpoint}/${client_1.default.CHECKOUT_API_VERSION}`);
    checkout = new checkout_1.default(client);
});
afterEach(() => {
    nock_1.default.cleanAll();
});
describe("Checkout", () => {
    test.each([false, true])("should make a payment. isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/payments")
            .reply(200, paymentsSuccess_1.paymentsSuccess);
        const paymentsRequest = createPaymentsCheckoutRequest();
        const paymentsResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toBeTruthy();
    });
    test.each([false, true])("should return correct Exception, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        try {
            scope.post("/payments")
                .reply(401);
            const paymentsRequest = createPaymentsCheckoutRequest();
            await checkout.payments(paymentsRequest);
        }
        catch (e) {
            expect(e instanceof httpClientException_1.default).toBeTruthy();
        }
    });
    test.each([false, true])("should have valid payment methods, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const paymentMethodsRequest = { merchantAccount };
        scope.post("/paymentMethods")
            .reply(200, paymentMethodsSuccess_1.paymentMethodsSuccess);
        const paymentMethodsResponse = await checkout.paymentMethods(paymentMethodsRequest);
        if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
            expect(paymentMethodsResponse.paymentMethods.length).toBeGreaterThan(0);
        }
        else {
            fail();
        }
    });
    test.each([false, true])("should have valid payment link, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess = getPaymentLinkSuccess(expiresAt);
        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);
        const paymentSuccessLinkResponse = await checkout.paymentLinks(createPaymentLinkRequest());
        expect(paymentSuccessLinkResponse).toBeTruthy();
    });
    test.each([isCI, true])("should get payment link, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess = getPaymentLinkSuccess(expiresAt);
        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);
        const paymentSuccessLinkResponse = await checkout.paymentLinks(createPaymentLinkRequest());
        scope.get(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, paymentLinkSuccess);
        const paymentLink = await checkout.getPaymentLinks(paymentSuccessLinkResponse.id);
        expect(paymentLink).toBeTruthy();
    });
    test.each([isCI, true])("should patch payment link, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess = getPaymentLinkSuccess(expiresAt);
        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);
        const paymentSuccessLinkResponse = await checkout.paymentLinks(createPaymentLinkRequest());
        scope.patch(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, { ...paymentLinkSuccess, status: "expired" });
        const paymentLink = await checkout.updatePaymentLinks(paymentSuccessLinkResponse.id, "expired");
        expect(paymentLink.status).toEqual("expired");
    });
    test.each([isCI, true])("should have payment details, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/payments/details")
            .reply(200, paymentsDetailsSuccess_1.paymentDetailsSuccess);
        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });
    test.each([false, true])("should have payment session success, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/paymentSession")
            .reply(200, paymentSessionSucess_1.paymentSessionSuccess);
        const paymentSessionRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });
    test.each([isCI, true])("should have payments result, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/payments/result")
            .reply(200, paymentsResultSucess_1.paymentsResultSuccess);
        const paymentResultRequest = {
            payload: "This is a test payload",
        };
        const paymentResultResponse = await checkout.paymentResult(paymentResultRequest);
        expect(paymentResultResponse.resultCode).toEqual("Authorised");
    });
    test.each([false, true])("should have missing identifier on live, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        client.setEnvironment("LIVE");
        try {
            new checkout_1.default(client);
            fail();
        }
        catch (e) {
            expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
        }
    });
    test.each([false, true])("should succeed on multibanco payment, isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/payments")
            .reply(200, paymentsResultMultibancoSuccess_1.paymentsResultMultibancoSuccess);
        const paymentsRequest = createPaymentsCheckoutRequest();
        const paymentsResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toBeTruthy();
        expect(paymentsResponse.additionalData).toBeTruthy();
    });
    test.each([false, true])("should get origin keys. isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        const checkoutUtility = new checkout_1.default(client);
        const originKeysRequest = {
            originDomains: ["https://www.your-domain.com"],
        };
        (0, nock_1.default)(`${client.config.checkoutEndpoint}`)
            .post(`/${client_1.default.CHECKOUT_API_VERSION}/originKeys`)
            .reply(200, originkeysSuccess_1.originKeysSuccess);
        const originKeysResponse = await checkoutUtility.originKeys(originKeysRequest);
        if (originKeysResponse.originKeys) {
            return expect(originKeysResponse.originKeys["https://www.your-domain.com"].startsWith("pub.v2")).toBeTruthy();
        }
        fail("Error: originKeysResponse.originKeys is empty");
    });
    // TODO: add gift card to PaymentMethod and unmock test
    test.each([true, true])("should get payment methods balance", async (isMock) => {
        !isMock && nock_1.default.restore();
        const paymentMethodsRequest = {
            merchantAccount,
            amount: createAmountObject("USD", 1000),
            paymentMethod: {},
            reference: "mocked_reference"
        };
        const paymentMethodsBalanceResponse = {
            balance: { currency: "USD", value: 1000 },
            resultCode: models_1.CheckoutBalanceCheckResponse.ResultCodeEnum.Success
        };
        scope.post("/paymentMethods/balance")
            .reply(200, paymentMethodsBalanceResponse);
        const paymentsResponse = await checkout.paymentMethodsBalance(paymentMethodsRequest);
        expect(paymentsResponse.balance.value).toEqual(1000);
    });
    test.each([false, true])("should create order", async (isMock) => {
        !isMock && nock_1.default.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };
        const orderResponse = {
            expiresAt,
            amount: createAmountObject("USD", 500),
            orderData: "mocked_order_data",
            remainingAmount: { currency: "USD", value: 500 },
            resultCode: models_1.CheckoutCreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200, orderResponse);
        const response = await checkout.orders(orderRequest);
        expect(response).toBeTruthy();
    });
    test.each([false, true])("should cancel order", async (isMock) => {
        !isMock && nock_1.default.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };
        const orderResponse = {
            expiresAt,
            amount: createAmountObject("USD", 500),
            orderData: "mocked_order_data",
            remainingAmount: { currency: "USD", value: 500 },
            resultCode: models_1.CheckoutCreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200, orderResponse);
        const createOrderResponse = await checkout.orders(orderRequest);
        const orderCancelResponse = {
            pspReference: "mocked_psp_ref",
            resultCode: models_1.CheckoutCancelOrderResponse.ResultCodeEnum.Received
        };
        scope.post("/orders/cancel")
            .reply(200, orderCancelResponse);
        const response = await checkout.ordersCancel({
            order: {
                orderData: createOrderResponse.orderData,
                pspReference: createOrderResponse.pspReference
            },
            merchantAccount
        });
        expect(response).toBeTruthy();
    });
    test.each([false, true])("should create a session. isMock: %p", async (isMock) => {
        !isMock && nock_1.default.restore();
        scope.post("/sessions")
            .reply(200, sessionsSuccess_1.sessionsSuccess);
        const sessionsRequest = createSessionRequest();
        const sessionsResponse = await checkout.sessions(sessionsRequest);
        expect(sessionsResponse.sessionData).toBeTruthy();
    });
});
//# sourceMappingURL=checkout.spec.js.map