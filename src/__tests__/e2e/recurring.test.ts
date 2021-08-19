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
import RecurringService from "../../services/recurring";
import Client from "../../client";
import { createPaymentsCheckoutRequest } from "./checkout.test";
import Checkout from "../../services/checkout";
import {PaymentRequest, PaymentResponse} from "../../typings/checkout/models";
import {
    ScheduleAccountUpdaterRequest,
    ScheduleAccountUpdaterResult,
    DisableRequest,
    RecurringDetailsRequest,
    Recurring,
    NotifyShopperRequest,
    RecurringDetailsResult, NotifyShopperResult
} from "../../typings/recurring/models";

const createRecurringDetailsRequest = (): RecurringDetailsRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        recurring: { contract: Recurring.ContractEnum.Recurring },
        shopperReference: "shopperReference",
    };
};

let client: Client;
let recurring: RecurringService;
let checkout: Checkout;

beforeEach((): void => {

    client = createClient(process.env.ADYEN_API_KEY);
    recurring = new RecurringService(client);
    checkout = new Checkout(client);
});

describe("Recurring", (): void => {
    test("should test have recurring details list", async (): Promise<void> => {
        const request: RecurringDetailsRequest  = createRecurringDetailsRequest();
        try {
            const result: RecurringDetailsResult = await recurring.listRecurringDetails(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test("should disable", async (): Promise<void> => {
        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const res: PaymentResponse = await checkout.payments(paymentsRequest);

        const request: DisableRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperReference",
            recurringDetailReference: res.additionalData!["recurring.recurringDetailReference"]
        };

        try {
            const result = await recurring.disable(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.skip("should send pre-debit Notification", async (): Promise<void> => {
        const notifyShopperRequest: NotifyShopperRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
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
            const result: NotifyShopperResult = await recurring.notifyShopper(notifyShopperRequest);
            expect(result).toBeTruthy();
        } catch (e) {
            console.log(e);
            fail(e.message);
        }
    });


    // TODO: register account for AccountUpdater and unmock test
    test.skip("should schedule account updater", async (): Promise<void> => {
        const request: ScheduleAccountUpdaterRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            reference: "ref",
            card: {
                expiryMonth: "03",
                expiryYear: "2030",
                holderName: "John Smith",
                number: "4111111111111111"
            }
        };

        try {
            const result: ScheduleAccountUpdaterResult = await recurring.scheduleAccountUpdater(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });
});
