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
exports.TrackData = void 0;
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
class TrackData {
    static getAttributeTypeMap() {
        return TrackData.attributeTypeMap;
    }
}
exports.TrackData = TrackData;
TrackData.discriminator = undefined;
TrackData.attributeTypeMap = [
    {
        "name": "TrackFormat",
        "baseName": "TrackFormat",
        "type": "TrackData.TrackFormatEnum"
    },
    {
        "name": "TrackNumb",
        "baseName": "TrackNumb",
        "type": "number"
    },
    {
        "name": "Value",
        "baseName": "Value",
        "type": "string"
    }
];
(function (TrackData) {
    let TrackFormatEnum;
    (function (TrackFormatEnum) {
        TrackFormatEnum[TrackFormatEnum["Aamva"] = 'AAMVA'] = "Aamva";
        TrackFormatEnum[TrackFormatEnum["Cmc7"] = 'CMC-7'] = "Cmc7";
        TrackFormatEnum[TrackFormatEnum["E13B"] = 'E-13B'] = "E13B";
        TrackFormatEnum[TrackFormatEnum["Iso"] = 'ISO'] = "Iso";
        TrackFormatEnum[TrackFormatEnum["JisI"] = 'JIS-I'] = "JisI";
        TrackFormatEnum[TrackFormatEnum["JisIi"] = 'JIS-II'] = "JisIi";
    })(TrackFormatEnum = TrackData.TrackFormatEnum || (TrackData.TrackFormatEnum = {}));
})(TrackData = exports.TrackData || (exports.TrackData = {}));
//# sourceMappingURL=trackData.js.map