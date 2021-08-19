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

import { createClient } from "../../__mocks__/base";
import Payout from "../../services/payout";
import Client from "../../client";
import StoreDetailRequest = IPayouts.StoreDetailRequest;
import { ApiConstants } from "../../constants/apiConstants";
import StoreDetailAndSubmitResponse = IPayouts.StoreDetailAndSubmitResponse;
import StoreDetailAndSubmitRequest = IPayouts.StoreDetailAndSubmitRequest;
import ModifyRequest = IPayouts.ModifyRequest;
import ModifyResponse = IPayouts.ModifyResponse;
import SubmitResponse = IPayouts.SubmitResponse;
import SubmitRequest = IPayouts.SubmitRequest;
import StoreDetailResponse = IPayouts.StoreDetailResponse;
import PayoutResponse = IPayouts.PayoutResponse;
import PayoutRequest = IPayouts.PayoutRequest;

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

const mockStoreDetailRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): IPayouts.StoreDetailRequest => ({
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

const mockSubmitRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): IPayouts.SubmitRequest => ({
    selectedRecurringDetailReference: "LATEST",
    recurring: {
        contract: "PAYOUT"
    },
    ...defaultData,
    ...amountAndReference,
    merchantAccount,
});

const mockStoreDetailAndSubmitRequest = (merchantAccount?: string): IPayouts.StoreDetailAndSubmitRequest => ({
    ...amountAndReference,
    ...(mockStoreDetailRequest(merchantAccount)),
});

const mockPayoutRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): IPayouts.PayoutRequest => ({
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

let client: Client;
let clientStore: Client;
let clientReview: Client;
let payout: Payout;

beforeEach((): void => {
    client = createClient(process.env.ADYEN_API_KEY);
    clientStore = createClient(process.env.ADYEN_STOREPAYOUT_APIKEY);
    clientReview = createClient(process.env.ADYEN_REVIEWPAYOUT_APIKEY);
    payout = new Payout(client);
});

describe.skip("PayoutTest", function (): void {
    test("should succeed on store detail and submit third party", async function (): Promise<void> {
        payout = new Payout(clientStore);
        const request: StoreDetailAndSubmitRequest = mockStoreDetailAndSubmitRequest();

        const result: StoreDetailAndSubmitResponse = await payout.storeDetailAndSubmitThirdParty(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();
    });

    test.each([false, true])("should succeed on store detail", async function (): Promise<void> {
        payout = new Payout(clientStore);
        const request: StoreDetailRequest = mockStoreDetailRequest();
        const result = await payout.storeDetail(request);

        expect("Success").toEqual(result.resultCode);
        expect(result.pspReference).toBeTruthy();
        expect(result.recurringDetailReference).toBeTruthy();
    });

    test("should succeed on confirm third party", async function (): Promise<void> {
        payout = new Payout(clientStore);
        const storeRequest: StoreDetailRequest = mockStoreDetailRequest();
        const storeResult: StoreDetailAndSubmitResponse = await payout.storeDetail(storeRequest);

        payout = new Payout(clientReview);

        const request: ModifyRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            originalReference: storeResult.pspReference
        };
        const result: ModifyResponse = await payout.confirmThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toBeTruthy();
    });

    test("should succeed on submit third party", async function (): Promise<void> {
        payout = new Payout(clientStore);

        const request: SubmitRequest = mockSubmitRequest();
        const result: SubmitResponse = await payout.submitThirdparty(request);

        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();

        if (result.additionalData) {
            expect(result.additionalData[ApiConstants.FRAUD_RESULT_TYPE]).toEqual("GREEN");
            expect(result.additionalData[ApiConstants.FRAUD_MANUAL_REVIEW]).toEqual("false");
        }
    });

    test("should succeed on decline third party", async function (): Promise<void> {
        payout = new Payout(clientStore);
        const storeRequest: StoreDetailRequest = mockStoreDetailRequest();
        const storeResult: StoreDetailResponse = await payout.storeDetail(storeRequest);

        payout = new Payout(clientReview);
        const request: IPayouts.ModifyRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            originalReference: storeResult.pspReference
        };
        const result: ModifyResponse = await payout.declineThirdParty(request);

        expect(result.response).toEqual("[payout-decline-received]");
        expect(result.pspReference).toBeTruthy();
    });

    test("should succeed on payout", async function (): Promise<void> {
        const request: PayoutRequest = mockPayoutRequest();
        const result: PayoutResponse = await payout.payout(request);

        expect(result.resultCode).toEqual("Received");
        expect(result.pspReference).toBeTruthy();
    });
});