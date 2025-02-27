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
const config_1 = __importDefault(require("./config"));
const httpURLConnectionClient_1 = __importDefault(require("./httpClient/httpURLConnectionClient"));
const package_json_1 = require("../package.json");
class Client {
    constructor(options) {
        if (options.config) {
            this.config = options.config;
        }
        else {
            this.config = new config_1.default();
        }
        const environment = options.environment || this.config.environment;
        if (environment) {
            this.setEnvironment(environment, options.liveEndpointUrlPrefix);
            if (options.username && options.password && options.applicationName) {
                this.config.username = options.username;
                this.config.password = options.password;
                this.config.applicationName = options.applicationName;
            }
            if (options.apiKey) {
                this.config.apiKey = options.apiKey;
            }
        }
        if (options.httpClient) {
            this._httpClient = options.httpClient;
        }
    }
    setEnvironment(environment, liveEndpointUrlPrefix) {
        if (environment === "TEST") {
            this.config.endpoint = Client.ENDPOINT_TEST;
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
            this.config.hppEndpoint = Client.HPP_TEST;
            this.config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
        }
        else if (environment === "LIVE") {
            this.config.endpoint = Client.ENDPOINT_LIVE;
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_LIVE;
            this.config.hppEndpoint = Client.HPP_LIVE;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_LIVE;
            if (liveEndpointUrlPrefix) {
                this.config.endpoint =
                    `${Client.ENDPOINT_PROTOCOL}${liveEndpointUrlPrefix}${Client.ENDPOINT_LIVE_SUFFIX}`;
                this.config.checkoutEndpoint =
                    `${Client.ENDPOINT_PROTOCOL}${liveEndpointUrlPrefix}${Client.CHECKOUT_ENDPOINT_LIVE_SUFFIX}`;
            }
            else {
                this.config.endpoint = Client.ENDPOINT_LIVE;
                this.config.checkoutEndpoint = undefined;
            }
        }
    }
    get httpClient() {
        if (!this._httpClient) {
            this._httpClient = new httpURLConnectionClient_1.default();
        }
        return this._httpClient;
    }
    set httpClient(httpClient) {
        this._httpClient = httpClient;
    }
    setApplicationName(applicationName) {
        this.config.applicationName = applicationName;
    }
    setTimeouts(connectionTimeoutMillis, readTimeoutMillis) {
        this.config.connectionTimeoutMillis = connectionTimeoutMillis;
        this.config.readTimeoutMillis = readTimeoutMillis;
    }
}
Client.ENDPOINT_TEST = "https://pal-test.adyen.com";
Client.ENDPOINT_LIVE = "https://pal-live.adyen.com";
Client.ENDPOINT_LIVE_SUFFIX = "-pal-live.adyenpayments.com";
Client.HPP_TEST = "https://test.adyen.com/hpp";
Client.HPP_LIVE = "https://live.adyen.com/hpp";
Client.MARKETPAY_ENDPOINT_TEST = "https://cal-test.adyen.com/cal/services";
Client.MARKETPAY_ENDPOINT_LIVE = "https://cal-live.adyen.com/cal/services";
Client.CHECKOUT_API_VERSION = "v69";
Client.API_VERSION = "v64";
Client.RECURRING_API_VERSION = "v49";
Client.MARKETPAY_ACCOUNT_API_VERSION = "v6";
Client.MARKETPAY_FUND_API_VERSION = "v6";
Client.MARKETPAY_HOP_API_VERSION = "v6";
Client.MARKETPAY_NOTIFICATION_API_VERSION = "v5";
Client.MARKETPAY_NOTIFICATION_CONFIGURATION_API_VERSION = "v6";
Client.LIB_NAME = "adyen-node-api-library";
Client.LIB_VERSION = package_json_1.version;
Client.CHECKOUT_ENDPOINT_TEST = "https://checkout-test.adyen.com/checkout";
Client.CHECKOUT_ENDPOINT_LIVE_SUFFIX = "-checkout-live.adyenpayments.com/checkout";
Client.BIN_LOOKUP_PAL_SUFFIX = "/pal/servlet/BinLookup/";
Client.BIN_LOOKUP_API_VERSION = "v50";
Client.TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";
Client.TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com";
Client.ENDPOINT_PROTOCOL = "https://";
exports.default = Client;
//# sourceMappingURL=client.js.map