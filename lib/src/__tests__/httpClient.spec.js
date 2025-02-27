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
const client_1 = __importDefault(require("../client"));
const checkout_1 = __importDefault(require("../services/checkout"));
const apiException_1 = __importDefault(require("../services/exception/apiException"));
const checkout_spec_1 = require("./checkout.spec");
const httpClientException_1 = __importDefault(require("../httpClient/httpClientException"));
beforeEach(() => {
    nock_1.default.cleanAll();
});
const getResponse = async ({ apiKey, environment }, cb) => {
    const client = new client_1.default({ apiKey, environment });
    const checkout = new checkout_1.default(client);
    const scope = (0, nock_1.default)(`${client.config.checkoutEndpoint}/${client_1.default.CHECKOUT_API_VERSION}`)
        .post("/payments");
    const { errorMessageContains, errorMessageEquals, errorType } = cb(scope);
    const ErrorException = errorType === "ApiException" ? apiException_1.default : httpClientException_1.default;
    try {
        await checkout.payments((0, checkout_spec_1.createPaymentsCheckoutRequest)());
        fail("request should fail");
    }
    catch (e) {
        expect(e instanceof ErrorException).toBeTruthy();
        if (errorMessageEquals)
            expect(e.message).toEqual(errorMessageEquals);
        if (errorMessageContains)
            expect(e.message.toLowerCase()).toContain(errorMessageContains);
    }
};
describe("HTTP Client", function () {
    it.each `
        apiKey               | environment    | withError | args                                                                                                 | errorType                | contains       | equals
        ${""}                | ${"TEST"}      | ${true}   | ${["mocked_error_response"]}                                                                         | ${"ApiException"}        | ${"x-api-key"} | ${""}
        ${"MOCKED_API_KEY"}  | ${"TEST"}      | ${true}   | ${["some_error"]}                                                                                    | ${"ApiException"}        | ${""}          | ${"some_error"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError" }]} | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null: Invalid Request"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, {}]}                                                                                         | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, "fail"]}                                                                                     | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null"}
    `("Should return $errorType, $contains, $equals", async ({ apiKey, environment, withError, args, errorType, contains, equals }) => {
        await getResponse({ apiKey, environment }, (scope) => {
            if (withError)
                scope.replyWithError(args[0]);
            else
                scope.reply(args[0], args[1]);
            return { errorType, errorMessageContains: contains, errorMessageEquals: equals };
        });
    });
});
//# sourceMappingURL=httpClient.spec.js.map