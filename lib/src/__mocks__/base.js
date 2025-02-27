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
exports.createTerminalAPIRefundRequest = exports.createTerminalAPIPaymentRequest = exports.createBasicAuthClient = exports.createClient = void 0;
const client_1 = __importDefault(require("../client"));
const config_1 = __importDefault(require("../config"));
const models_1 = require("../typings/terminal/models");
const createClient = (apiKey = process.env.ADYEN_API_KEY) => {
    const config = new config_1.default();
    config.terminalApiCloudEndpoint = client_1.default.TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = client_1.default.ENDPOINT_TEST;
    config.checkoutEndpoint = client_1.default.CHECKOUT_ENDPOINT_TEST;
    config.marketPayEndpoint = client_1.default.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey;
    config.marketPayEndpoint = client_1.default.MARKETPAY_ENDPOINT_TEST;
    return new client_1.default({ config });
};
exports.createClient = createClient;
const createBasicAuthClient = () => {
    return new client_1.default({
        username: process.env.ADYEN_USER,
        password: process.env.ADYEN_PASSWORD,
        environment: "TEST",
        applicationName: "adyen-node-api-library"
    });
};
exports.createBasicAuthClient = createBasicAuthClient;
const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
const getMessageHeader = ({ messageCategory = models_1.MessageCategoryType.Payment } = {}) => ({
    MessageCategory: messageCategory,
    MessageClass: models_1.MessageClassType.Service,
    MessageType: models_1.MessageType.Request,
    POIID: process.env.ADYEN_TERMINAL_POIID,
    ProtocolVersion: "3.0",
    SaleID: id,
    ServiceID: id,
});
const timestamp = () => new Date().toISOString();
const transactionIdentification = {
    TimeStamp: timestamp(),
    TransactionID: id,
};
const saleData = {
    SaleTransactionID: transactionIdentification,
    SaleToAcquirerData: {
        applicationInfo: {
            merchantApplication: {
                version: "1",
                name: "test"
            }
        },
        metadata: {
            someMetaDataKey1: "YOUR_VALUE",
            someMetaDataKey2: "YOUR_VALUE"
        },
    }
};
const amountsReq = {
    Currency: "EUR",
    RequestedAmount: 1,
};
const paymentTransaction = {
    AmountsReq: amountsReq,
};
const paymentRequest = {
    PaymentTransaction: paymentTransaction,
    SaleData: saleData,
};
const getReversalRequest = (poiTransaction) => ({
    OriginalPOITransaction: {
        POITransactionID: {
            TransactionID: poiTransaction.TransactionID,
            TimeStamp: poiTransaction.TimeStamp
        },
    },
    ReversalReason: models_1.ReversalReasonType.MerchantCancel
});
const getSaleToPOIRequest = (messageHeader, request) => ({
    MessageHeader: messageHeader,
    ...request
});
const createTerminalAPIPaymentRequest = () => {
    const messageHeader = getMessageHeader();
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { PaymentRequest: paymentRequest });
    return { SaleToPOIRequest: saleToPOIRequest };
};
exports.createTerminalAPIPaymentRequest = createTerminalAPIPaymentRequest;
const createTerminalAPIRefundRequest = (transactionIdentification) => {
    const messageHeader = getMessageHeader({ messageCategory: models_1.MessageCategoryType.Reversal });
    const saleToPOIRequest = getSaleToPOIRequest(messageHeader, { ReversalRequest: getReversalRequest(transactionIdentification) });
    return { SaleToPOIRequest: saleToPOIRequest };
};
exports.createTerminalAPIRefundRequest = createTerminalAPIRefundRequest;
//# sourceMappingURL=base.js.map