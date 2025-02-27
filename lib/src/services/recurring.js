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
const getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
const service_1 = __importDefault(require("../service"));
const disable_1 = __importDefault(require("./resource/recurring/disable"));
const listRecurringDetails_1 = __importDefault(require("./resource/recurring/listRecurringDetails"));
const scheduleAccountUpdater_1 = __importDefault(require("./resource/recurring/scheduleAccountUpdater"));
const notifyShopper_1 = __importDefault(require("./resource/recurring/notifyShopper"));
class Recurring extends service_1.default {
    constructor(client) {
        super(client);
        this._listRecurringDetails = new listRecurringDetails_1.default(this);
        this._disable = new disable_1.default(this);
        this._scheduleAccountUpdater = new scheduleAccountUpdater_1.default(this);
        this._notifyShopper = new notifyShopper_1.default(this);
    }
    listRecurringDetails(request) {
        return (0, getJsonResponse_1.default)(this._listRecurringDetails, request);
    }
    disable(request) {
        return (0, getJsonResponse_1.default)(this._disable, request);
    }
    scheduleAccountUpdater(request) {
        return (0, getJsonResponse_1.default)(this._scheduleAccountUpdater, request);
    }
    notifyShopper(request) {
        return (0, getJsonResponse_1.default)(this._notifyShopper, request);
    }
}
exports.default = Recurring;
//# sourceMappingURL=recurring.js.map