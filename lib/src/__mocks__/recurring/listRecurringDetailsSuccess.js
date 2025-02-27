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
exports.listRecurringDetailsSuccess = void 0;
exports.listRecurringDetailsSuccess = {
    "creationDate": "2017-03-01T11:53:11+01:00",
    "details": [
        {
            "RecurringDetail": {
                "acquirer": "TestPmmAcquirer",
                "acquirerAccount": "TestPmmAcquirerAccount",
                "additionalData": {
                    "cardBin": "411111"
                },
                "alias": "cardAlias",
                "aliasType": "Default",
                "card": {
                    "expiryMonth": "8",
                    "expiryYear": "2018",
                    "holderName": "Holder",
                    "number": "1111"
                },
                "contractTypes": [
                    "ONECLICK"
                ],
                "creationDate": "2017-03-07T09:43:33+01:00",
                "firstPspReference": "8524888762135795",
                "paymentMethodVariant": "visa",
                "recurringDetailReference": "recurringReference",
                "variant": "visa"
            }
        },
        {
            "RecurringDetail": {
                "acquirer": "PayPalSandbox",
                "acquirerAccount": "TestPmmAcquirerAccount",
                "billingAddress": {
                    "city": "City",
                    "country": "NL",
                    "houseNumberOrName": "1",
                    "postalCode": "2312aa",
                    "stateOrProvince": "NA",
                    "street": "Street"
                },
                "contractTypes": [
                    "RECURRING"
                ],
                "creationDate": "2017-10-10T08:50:02+02:00",
                "firstPspReference": "8515076181707110",
                "paymentMethodVariant": "paypal",
                "recurringDetailReference": "8315076181982020",
                "tokenDetails": {
                    "tokenData": {
                        "EmailId": "tedtest@test.nl",
                        "PayPal.PayerId": "H95EPL8B2KFE6",
                        "BillingAgreementId": "B-7MA42752FE774625C"
                    },
                    "tokenDataType": "PayPal"
                },
                "variant": "paypal"
            }
        }
    ],
    "shopperReference": "test-123",
    "invalidOneclickContracts": "false"
};
//# sourceMappingURL=listRecurringDetailsSuccess.js.map