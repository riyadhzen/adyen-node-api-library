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
const apiKeyAuthenticatedService_1 = __importDefault(require("../apiKeyAuthenticatedService"));
const getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
const async_1 = __importDefault(require("./resource/terminal/cloud/async"));
const sync_1 = __importDefault(require("./resource/terminal/cloud/sync"));
const mergeDeep_1 = __importDefault(require("../utils/mergeDeep"));
const applicationInfo_1 = require("../typings/applicationInfo");
const models_1 = require("../typings/terminal/models");
class TerminalCloudAPI extends apiKeyAuthenticatedService_1.default {
    constructor(client) {
        super(client);
        this.terminalApiAsync = new async_1.default(this);
        this.terminalApiSync = new sync_1.default(this);
    }
    static setApplicationInfo(request) {
        if (request.SaleToPOIRequest.PaymentRequest) {
            const applicationInfo = new applicationInfo_1.ApplicationInfo();
            const saleToAcquirerData = { applicationInfo };
            const saleData = { saleToAcquirerData };
            const paymentRequest = { saleData };
            const saleToPOIRequest = { paymentRequest };
            const reqWithAppInfo = { saleToPOIRequest };
            (0, mergeDeep_1.default)(request, reqWithAppInfo);
            // SMTZ We need to keep the original acquirer data coming on from the request
            // so that we can pass it again to adyen.
            const originalAcquirer = request.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData;
            const formattedRequest = models_1.ObjectSerializer.serialize(request, "TerminalApiRequest");
            // SMTZ Re-inject request sale to acquirer data cause otherwise it will be lost
            formattedRequest.SaleToPOIRequest.PaymentRequest
                .SaleData.SaleToAcquirerData = originalAcquirer;
            // if (formattedRequest.SaleToPOIRequest?.PaymentRequest?.SaleData?.SaleToAcquirerData) {
            //     const dataString = JSON.stringify(formattedRequest.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData);
            //     formattedRequest.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData = Buffer.from(dataString).toString("base64");
            // }
            return formattedRequest;
        }
        return models_1.ObjectSerializer.serialize(request, "TerminalApiRequest");
    }
    async(terminalApiRequest) {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        return (0, getJsonResponse_1.default)(this.terminalApiAsync, request);
    }
    async sync(terminalApiRequest) {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        const response = await (0, getJsonResponse_1.default)(this.terminalApiSync, request);
        return models_1.ObjectSerializer.deserialize(response, "TerminalApiResponse");
    }
}
exports.default = TerminalCloudAPI;
//# sourceMappingURL=terminalCloudAPI.js.map