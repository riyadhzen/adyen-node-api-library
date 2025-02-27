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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("https");
const https_proxy_agent_1 = require("https-proxy-agent");
const fs = __importStar(require("fs"));
const url_1 = require("url");
const client_1 = __importDefault(require("../client"));
const httpClientException_1 = __importDefault(require("./httpClientException"));
const checkServerIdentity_1 = __importDefault(require("../helpers/checkServerIdentity"));
const apiException_1 = __importDefault(require("../services/exception/apiException"));
const apiConstants_1 = require("../constants/apiConstants");
class HttpURLConnectionClient {
    request(endpoint, json, config, isApiRequired, requestOptions) {
        requestOptions.headers = {};
        requestOptions.timeout = config.connectionTimeoutMillis;
        if (config.certificatePath) {
            this.installCertificateVerifier(config.certificatePath);
        }
        const apiKey = config.apiKey;
        if (isApiRequired && !apiKey) {
            return Promise.reject(new apiException_1.default("Invalid X-API-Key was used", 401));
        }
        if (apiKey) {
            requestOptions.headers[apiConstants_1.ApiConstants.API_KEY] = apiKey;
        }
        else {
            const authString = `${config.username}:${config.password}`;
            const authStringEnc = Buffer.from(authString, "utf8").toString("base64");
            requestOptions.headers.Authorization = `Basic ${authStringEnc}`;
        }
        requestOptions.headers[apiConstants_1.ApiConstants.CONTENT_TYPE] = apiConstants_1.ApiConstants.APPLICATION_JSON_TYPE;
        const httpConnection = this.createRequest(endpoint, requestOptions, config.applicationName);
        return this.doPostRequest(httpConnection, json);
    }
    post(endpoint, postParameters, config) {
        const postQuery = this.getQuery(postParameters);
        const connectionRequest = this.createRequest(endpoint, {}, config.applicationName);
        return this.doPostRequest(connectionRequest, postQuery);
    }
    createRequest(endpoint, requestOptions, applicationName) {
        if (!requestOptions.headers) {
            requestOptions.headers = {};
        }
        const url = new url_1.URL(endpoint);
        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;
        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[apiConstants_1.ApiConstants.IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }
        if (this.proxy && this.proxy.host) {
            const { host, port, ...options } = this.proxy;
            requestOptions.agent = new https_proxy_agent_1.HttpsProxyAgent({ host, port: port || 443, ...options });
        }
        else {
            requestOptions.agent = new https_1.Agent(this.agentOptions);
        }
        requestOptions.headers["Cache-Control"] = "no-cache";
        if (!requestOptions.method) {
            requestOptions.method = apiConstants_1.ApiConstants.METHOD_POST;
        }
        requestOptions.headers[apiConstants_1.ApiConstants.ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        requestOptions.headers[apiConstants_1.ApiConstants.USER_AGENT] = `${applicationName} ${client_1.default.LIB_NAME}/${client_1.default.LIB_VERSION}`;
        return (0, https_1.request)(requestOptions);
    }
    getQuery(params) {
        return params.map(([key, value]) => `${key}=${value}`).join("&");
    }
    doPostRequest(connectionRequest, json) {
        return new Promise((resolve, reject) => {
            connectionRequest.flushHeaders();
            connectionRequest.on("response", (res) => {
                const response = {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: ""
                };
                const getException = (responseBody) => new httpClientException_1.default({
                    message: `HTTP Exception: ${response.statusCode}. ${res.statusMessage}`,
                    statusCode: response.statusCode,
                    errorCode: undefined,
                    responseHeaders: response.headers,
                    responseBody,
                });
                let exception = getException(response.body.toString());
                res.on("data", (chunk) => {
                    response.body += chunk;
                });
                res.on("end", () => {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }
                    if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
                        try {
                            const formattedData = JSON.parse(response.body);
                            const isApiError = "status" in formattedData;
                            const isRequestError = "errors" in formattedData;
                            if (isApiError) {
                                exception = new httpClientException_1.default({
                                    message: `HTTP Exception: ${formattedData.status}. ${res.statusMessage}: ${formattedData.message}`,
                                    statusCode: formattedData.status,
                                    errorCode: formattedData.errorCode,
                                    responseHeaders: res.headers,
                                    responseBody: response.body,
                                });
                            }
                            else if (isRequestError) {
                                exception = new Error(response.body);
                            }
                            else {
                                exception = getException(response.body);
                            }
                        }
                        catch (e) {
                            reject(exception);
                        }
                        finally {
                            reject(exception);
                        }
                    }
                    resolve(response.body);
                });
                res.on("error", reject);
            });
            connectionRequest.on("timeout", () => {
                connectionRequest.abort();
            });
            connectionRequest.on("error", (e) => reject(new apiException_1.default(e.message)));
            connectionRequest.write(Buffer.from(json));
            connectionRequest.end();
        });
    }
    installCertificateVerifier(terminalCertificatePath) {
        try {
            const certificateInput = fs.readFileSync(terminalCertificatePath);
            this.agentOptions = {
                ca: certificateInput,
                checkServerIdentity: checkServerIdentity_1.default,
            };
        }
        catch (e) {
            return Promise.reject(new httpClientException_1.default({ message: `Error loading certificate from path: ${e.message}` }));
        }
    }
}
HttpURLConnectionClient.CHARSET = "utf-8";
exports.default = HttpURLConnectionClient;
//# sourceMappingURL=httpURLConnectionClient.js.map