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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostStatus = void 0;
/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
class HostStatus {
    static getAttributeTypeMap() {
        return HostStatus.attributeTypeMap;
    }
}
exports.HostStatus = HostStatus;
HostStatus.discriminator = undefined;
HostStatus.attributeTypeMap = [
    {
        "name": "AcquirerID",
        "baseName": "AcquirerID",
        "type": "string"
    },
    {
        "name": "IsReachableFlag",
        "baseName": "IsReachableFlag",
        "type": "boolean"
    }
];
//# sourceMappingURL=hostStatus.js.map