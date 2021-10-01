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
import Client from "../../client";
import Checkout from "../../services/checkout";
import {
    Amount,
    CardDetails,
    CheckoutBalanceCheckRequest,
    CheckoutBalanceCheckResponse,
    CheckoutCancelOrderResponse,
    CheckoutCreateOrderRequest,
    CheckoutCreateOrderResponse,
    CheckoutUtilityRequest,
    CheckoutUtilityResponse,
    CreatePaymentLinkRequest,
    DetailsRequest,
    PaymentLinkResource,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PaymentRequest,
    PaymentResponse,
    PaymentSetupRequest,
    PaymentSetupResponse,
    PaymentVerificationRequest,
    PaymentVerificationResponse,
} from "../../typings/checkout/models";

const merchantAccount = process.env.ADYEN_MERCHANT!;
const reference = "Your order number";

function createAmountObject(currency: string, value: number): Amount {
    return {
        currency,
        value,
    };
}

function createPaymentsDetailsRequest(): DetailsRequest {
    return {
        details: {
            MD: "WnhhZk5SekJkQjFKNWdmbTNHZEoxZz09IRqzRApH-yJvfUA9E7vigiihjzK7Gobi0Gx3oP9Q_uzYWgVpTA4vMQdjZrfIloLjYA8FcAcB0-bEn8L-EXjqmQRN6Jlk7HVjZjdkwReNqaYHcb41vuvbi1n4Lu9ybSCoofOMCy1Emhj20OrDxmrYdFXnMut6mK4dOKD6CsivHH-H_w1fH1a6mq-21BrlKVGXlpHiJCABHpP0QB6iBRZbR8L2JBMTswnY-BFlaL5AUEdSl_iD0Y3VcrR-eB_FF-h-4w5qAeerPBJwk8-g975s8c2V973XNvzt6EBPlqQvJCsnW69j-wyeIYWDDAt7R89jWJAh53ofJhELwhxASYLPmQx6n3TknzvmQAqNIpmUfb5-zhzdDl6JGN3obCS6bpyj7MmaQy_DNZYH2C6froTTC5QDLg9GGOPexOyj7CRM8ywHNpTIeOs5gFmK5H-pwWcxJMh2nf0wMgNrIQrdyvZZgsYvw80PKHcJLjIuH4sIAAAAAAAAAC2QW2-CQBCF_wsPfSrL7qooJqZRbKyJqbVIvYSkAXYICuzqslzU-N-7JH08c_KdmTMPgxhjwxVFATIGNxcV24lKgTReDdLXVqrUpRwHVmDd74kyMR6gMuQsEi2qSkwQa1H8T8cdrd0cykRo3RmBJXhgMSg004QSUKmEhMDyTgpK8xuSqYxTs1OBBfzX9wJrym7ATS8VjSt4cpJFqE6Cv3Ur0pArzYAEHsMEY0xtB_dehGQgtyIDPvFmkfzwD4vPKMmPC0dtvNn568x6-7t7WbduewC-WUpyZeuDbkh1wUsVoZqi0ZDYFFMyJHjUtwcEJdfqyuyVOPp2tjOz83y6VbzYmryWzT5b0tUPPZL3vBfvmu5XWGc9jLiS3W03net7cz2vw7wCY9wfOM7z-QdxphRBbQEAAA",
            PaRes: "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"
        }
    };
}

// export function createPaymentsCheckoutRequest(): PaymentRequest {
//     const paymentMethodDetails = {
//         type: CardDetails.TypeEnum.Scheme,
//         encryptedCardNumber: "adyenjs_0_1_25$kiEk6tPyuACMI86Vu6rwgXcrW2V43HOUN7i8sXJE68+lFtWAWFa3PX6uEP4JGmXVJqTOUFJx5nD4v2pEiuYYzaHDE+hcVJNlfXKFmk7PGeamcrBkDMJZDxLyZ0TmRng+SfYqyzFT9tdfHa+cSOvg5f4pXBp/r1tVMyxY4NGL463JOiLZdExikWL9YDzIIlYx524gsC0aJquXak8NzDYGoZoNFIPp7Uatfk2663uenlJoEJi4ZAs6jwP3FU0dEmW1mmk41oJSLk6QoClejgf+JAjDE1kjJXch3xknxAgnNQM58Wr72hDkOCg2gTthLGqUganzl4MIaU9e8SJp1U6izw==$FNEisrJYvJl0rnb5P3JgyUw1OdtuZiScSfF9Ns/eOIeQ4aNP2flYGgUF9qW1U7TZaBnracoZ6vQKpYns8S8ESTroWM6XzKvlql+E5R2/ou7pr8bjOnSFJdiKuuLf9l7eYwEBDxoPEydAQER6rPH1LnJGqAAQhaHMnNaQbzofMQ30OfXAAsvi3YvTVqk+V904DGoCrbNvzO5+I7ZkyH20E/l/NG6P4nH4sfkWHo/EdqgGNG+NvBgeS1F6STJND3qxn5/QV1mgqdQ0l9hts2WHIMBhV3OZo5IjJfR3akwDdrCqcNCSb2kHSMc1iVhVSmmnUee2pPduyqZiVZnq2QcEsY80ybMBzh+Ar2IJBq0v9NgAsi4ppJREqNE+GdO7RKgnBUwYKHo57IsuEV5OAkFKZuLEHyRom0FstLVakMUSt2bBfthGVpUTIEnBYZTSOf7WCJ52FCtXtwt2M8VA3ucL521ehEQQfm/gAaWkwYNPeIsYXWJOTpeEW/sBF3+yQW25ArETtRkRSVrBuDMOCSAb1wx6vYy1iRFvS2ItXBc7cPhxLTIv8eWbLiStZXvRr2wUuFrkH57l9FU/0YmtzsU3h85djMIrJz1qkgYjYVPslqERyHpNABB2Bndr9+9BuRn5IzAVRHatOKcURXRJYH1qKYYZzQnUVVLnhFlXjTBNvIeFyLfyouGHpqmChRcWhCI0XpZgWm5VXtz0au7X5XFml88Cei16ipmZOCbE2JfQysWi5w==",
//         encryptedExpiryMonth: "adyenjs_0_1_25$IudwenF/Ce4IDM9UAeZuxW18H+261YoqajI94bh9DL20bBJob+GJ64kMscPb8ZWE1KA0TYlLfe2eAkbv2Ag38ezCKkjD1+4jbyEBghebQuCymJgRU/XsI6ejx0T7KQcLPZX2w++PtHrhipPPoOaNURcms11xc/2r4XMnSC3pzZ8pMyNwENV5MfBebp3WC1CKXK8+rQq9pHhFaIH8LiKVwiLRvLINrcdK6DB1TmoYDxk7vVVofVX0Nqrk/4kv7FzNnfarklSFVbe7tKV1Uufkq1haBQuLgBXoZaxjtRAqWIhC9uDmMRB60Ab08z0lITvJrT8GKpjCNILjzc7iyQik+g==$RPi8G77HfBm2d9Hw6w1SQZHFFmg0kRzdyM0oeA3sHB0k7m5woROvfwe8kmKD8iGLR9yDT9EVgrx64D+IVBq+xpg7FOeridRtnO5yODsgeKrU/rt8PbV3/+K+bBmhoM6eT/8/mM3D7HYNAOh8hnU4jm/bRfRg4ULP57w=",
//         encryptedExpiryYear: "adyenjs_0_1_25$JYT45iRLqVLNg0IhhZPYFAYqhbGTjgUJXpcQvmMZAhO/P/SfppEYNeZHY6ks6AX7gaxZOPft9+ot0ZjGZ5cG6FP7OyX13jFmP8NNYic7++iCa77oR2P6WwBbMzAKeydHmxJMvFlmZprv6HccSZ6VV1Y2A3G8HOMJzCjY0FfKitjRlf3GbLD7c/egqI6eIKpHp0GMZRAzxF2/KVRKDg60bw3VV/ED56lG7FO9Glds+ptP5K6g3vOagZPqNyABix9lQTrPSRVW7M4Rjwswt3RW50sh0lpSIdxwjP8XU9bG43LcJVP+Nmwb9NpReTRiLxLAeKry45fHtsCFomzmy36VnQ==$6xzZJbHs6RXnqk7r4gYYoT6M6tvvtIjTnipuNFiD7Om8ykzc6rM9tOFI5BXdzV5FZI6L838hlEbEI9jNxgO3WcIjRSuoDpE48B12MmKPgpVt5jTvRwN+vmqR7a03o1d3eHzxifHyg7T4migf7L7Mibl8sSyuCypV+LTU",
//         encryptedSecurityCode: "adyenjs_0_1_25$VfRhjLp1axCsqwOo72/7dlKZZf+82iE1hovo1GepazbTdcqJkEO/g6g4j3EEKCeTv4uKL4rG7nV9fU478hq6cDBkRrBi36/MOdAg013HFkHfVOyd02u0/JgB9TpER1BJy3WNcEA4n0ZjPeKBDJQl2GtM4v90mCw7bsZhl21ZdowSnFyb/vfist+H0FHkMOQqxUUhI2ZnpMHAo7psGefKGOjVA+jioRwUBhStmmP9kCzqt+Uva3DtouqYNLZS+saZ6MmmXM6mHkvNYQi/qxVC+60qyEqmI4MtCqKt2noIptSvoMNxQqQ2pm6218sD37LlvEYk9J0hMeo1SVgqzjTz0Q==$280aJPJhw6GmPrlRJ+vTUl99EGByFGGjBG4CmcezMwV8HfgeCR6gTRrO2jigD4WzkFfmpmpICj82jz+nFbWrNlDvvkJSHuOpBXN4/ma1QgzZC8D58PZ547XtCpNgIunpkhN4kMfGLuSx3n7QoqMSVJGK3KiDeiAkBcTIxa+3OzZUwSHpjuWLpT0PYkFuI0kTv2u2GWSlkWmvEUZqniac6w1bL2EQ3k24fEbSDSkdtKcRM5BSWuhF5nwAvq27PXXzUYI51JrBzGwK3xoCa4pzB0AToUs6DeGess/YXEqg/Qh7E1FR1eS/DH1a46rEdeFW2efQXsYOkfHOnw7Zvecuw5RHM9H9PeymPvfbVd09wPnrHSl0dkcpzGbitX3dxnmBn/TycxyqnNvy8mcFqx5PYrGFB7Xem7I385p0My0mbLAZzBQCNAUZmPKlEE2IaM/yS9zn/GUlT6+xCQGFaejWkwDGNvJXGLabEgqMA8twBNlElonEwyx5umxS2FOhyvO3ZaMbhz4JPatmaXb8rLAN4Vuu+7wivNNH2HUt31vDFVMwy4gfwFhMdbipF37v10jzyxbphO8x5Ne301nRHTXC3q0Ynb1IaX4FRGJkX130VbMn7o/LoJP2c6tjEwaDf05Dpw==",
//     };
//
//     return {
//         amount: createAmountObject("USD", 1000),
//         merchantAccount,
//         paymentMethod: paymentMethodDetails,
//         reference,
//         returnUrl: "https://your-company.com/...",
//         shopperReference: "shopperReference",
//         storePaymentMethod: true
//     };
// }

function createPaymentSessionRequest(): PaymentSetupRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
        channel: PaymentSetupRequest.ChannelEnum.Web,
        sdkVersion: "3.7.0"
    };
}

function createPaymentLinkRequest(): CreatePaymentLinkRequest {
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

let client: Client;
let checkout: Checkout;

beforeEach((): void => {
    client = createClient(process.env.ADYEN_API_KEY);
    checkout = new Checkout(client);
});

describe("Checkout", (): void => {
    // test("should make a payment.", async (): Promise<void> => {
    //     const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
    //     const paymentsResponse: PaymentResponse = await checkout.payments(paymentsRequest);
    //     expect(paymentsResponse.pspReference).toBeTruthy();
    // });

    test("should have valid payment methods", async (): Promise<void> => {
        const paymentMethodsRequest: PaymentMethodsRequest = {merchantAccount};
        const paymentMethodsResponse: PaymentMethodsResponse = await checkout.paymentMethods(paymentMethodsRequest);
        if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
            expect(paymentMethodsResponse.paymentMethods.length).toBeGreaterThan(0);
        } else {
            fail();
        }
    });

    test("should have valid payment link", async (): Promise<void> => {
        const paymentSuccessLinkResponse: PaymentLinkResource = await checkout.paymentLinks(createPaymentLinkRequest());
        expect(paymentSuccessLinkResponse).toBeTruthy();
    });

    test("should get payment link", async (): Promise<void> => {
        const paymentSuccessLinkResponse: PaymentLinkResource = await checkout.paymentLinks(createPaymentLinkRequest());
        const paymentLink: PaymentLinkResource = await checkout.getPaymentLinks(paymentSuccessLinkResponse.id);
        expect(paymentLink).toBeTruthy();
    });

    test("should patch payment link", async (): Promise<void> => {
        const paymentSuccessLinkResponse: PaymentLinkResource = await checkout.paymentLinks(createPaymentLinkRequest());
        const paymentLink: PaymentLinkResource = await checkout.updatePaymentLinks(paymentSuccessLinkResponse.id, "expired");
        expect(paymentLink.status).toEqual("expired");
    });

    test.skip("should have payment details", async (): Promise<void> => {
        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });

    test("should have payment session success", async (): Promise<void> => {
        const paymentSessionRequest: PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse: PaymentSetupResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });

    test.skip("should have payments result", async (): Promise<void> => {
        const paymentSessionRequest: PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse: PaymentSetupResponse = await checkout.paymentSession(paymentSessionRequest);
        console.log(paymentSessionResponse);
        const paymentResultRequest: PaymentVerificationRequest = {
            payload: paymentSessionResponse.paymentSession || '',
        };
        const paymentResultResponse: PaymentVerificationResponse = await checkout.paymentResult(paymentResultRequest);

        expect(paymentResultResponse.resultCode).toEqual("Authorised");
    });

    test("should have missing identifier on live", async (): Promise<void> => {
        client.setEnvironment("LIVE");
        try {
            new Checkout(client);
            fail();
        } catch (e) {
            if(e instanceof  Error) {
                expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
            } else {
                fail();
            }
        }
    });

    test("should get origin keys.", async (): Promise<void> => {
        const checkoutUtility = new Checkout(client);
        const originKeysRequest: CheckoutUtilityRequest = {
            originDomains: ["https://www.your-domain.com"],
        };
        const originKeysResponse: CheckoutUtilityResponse = await checkoutUtility.originKeys(originKeysRequest);
        if (originKeysResponse.originKeys) {
            return expect(originKeysResponse.originKeys["https://www.your-domain.com"].startsWith("pub.v2")).toBeTruthy();
        }
        fail("Error: originKeysResponse.originKeys is empty");
    });

    test.skip("should get payment methods balance", async (): Promise<void> => {
        const paymentMethodsRequest: CheckoutBalanceCheckRequest = {
            merchantAccount,
            amount: createAmountObject("USD", 0),
            paymentMethod: {
                type: 'givex',
                number: '603628672882001915092',
                cvc: '5754',
            },
            reference: "mocked_reference"
        };

        const paymentsResponse: CheckoutBalanceCheckResponse = await checkout.paymentMethodsBalance(paymentMethodsRequest);
        expect(paymentsResponse.balance.value).toEqual(1000);
    });

    test("should create order", async (): Promise<void> => {
        const orderRequest: CheckoutCreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const response: CheckoutCreateOrderResponse = await checkout.orders(orderRequest);
        expect(response).toBeTruthy();
    });

    test("should cancel order", async (): Promise<void> => {

        const orderRequest: CheckoutCreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const createOrderResponse: CheckoutCreateOrderResponse = await checkout.orders(orderRequest);

        const response: CheckoutCancelOrderResponse = await checkout.ordersCancel({
            order: {
                orderData: createOrderResponse.orderData,
                pspReference: createOrderResponse.pspReference!
            },
            merchantAccount
        });
        expect(response).toBeTruthy();
    });
});
