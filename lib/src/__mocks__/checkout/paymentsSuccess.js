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
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentsSuccess = void 0;
/* tslint:disable */
exports.paymentsSuccess = JSON.stringify({
    additionalData: {
        expiryDate: "8/2018",
        fraudResultType: "GREEN",
        cardBin: "411111",
        cardSummary: "1111",
        fraudManualReview: "false",
        aliasType: "Default",
        alias: "H167852639363479",
        cardPaymentMethod: "visa",
        cardIssuingCountry: "NL",
        "recurring.recurringDetailReference": "8415883203388055",
    },
    fraudResult: {
        accountScore: 0,
        results: [
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 2,
                    name: "CardChunkUsage",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 3,
                    name: "PaymentDetailUsage",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 4,
                    name: "HolderNameUsage",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 1,
                    name: "PaymentDetailRefCheck",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 13,
                    name: "IssuerRefCheck",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 15,
                    name: "IssuingCountryReferral",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 27,
                    name: "PmOwnerRefCheck",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 10,
                    name: "HolderNameContainsNumber",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 11,
                    name: "HolderNameIsOneWord",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 82,
                    name: "CustomFieldCheck",
                },
            },
            {
                FraudCheckResult: {
                    accountScore: 0,
                    checkId: 25,
                    name: "CVCAuthResultCheck",
                },
            },
        ],
    },
    pspReference: "8535296650153317",
    resultCode: "Authorised",
});
//# sourceMappingURL=paymentsSuccess.js.map