"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const apiKeyAuthenticatedService_1 = __importDefault(require("../apiKeyAuthenticatedService"));
const getCostEstimate_1 = __importDefault(require("./resource/binLookup/getCostEstimate"));
const get3dsAvailability_1 = __importDefault(require("./resource/binLookup/get3dsAvailability"));
const getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
class BinLookup extends apiKeyAuthenticatedService_1.default {
    constructor(client) {
        super(client);
        this._get3dsAvailability = new get3dsAvailability_1.default(this);
        this._getCostEstimate = new getCostEstimate_1.default(this);
    }
    get3dsAvailability(request) {
        return (0, getJsonResponse_1.default)(this._get3dsAvailability, request);
    }
    getCostEstimate(request) {
        return (0, getJsonResponse_1.default)(this._getCostEstimate, request);
    }
}
exports.default = BinLookup;
//# sourceMappingURL=binLookup.js.map