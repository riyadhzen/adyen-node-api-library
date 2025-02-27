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
exports.Instalment = void 0;
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
class Instalment {
    static getAttributeTypeMap() {
        return Instalment.attributeTypeMap;
    }
}
exports.Instalment = Instalment;
Instalment.discriminator = undefined;
Instalment.attributeTypeMap = [
    {
        "name": "Charges",
        "baseName": "Charges",
        "type": "number"
    },
    {
        "name": "CumulativeAmount",
        "baseName": "CumulativeAmount",
        "type": "number"
    },
    {
        "name": "FirstAmount",
        "baseName": "FirstAmount",
        "type": "number"
    },
    {
        "name": "FirstPaymentDate",
        "baseName": "FirstPaymentDate",
        "type": "string"
    },
    {
        "name": "InstalmentType",
        "baseName": "InstalmentType",
        "type": "Array<Instalment.InstalmentTypeEnum>"
    },
    {
        "name": "Period",
        "baseName": "Period",
        "type": "number"
    },
    {
        "name": "PeriodUnit",
        "baseName": "PeriodUnit",
        "type": "Instalment.PeriodUnitEnum"
    },
    {
        "name": "PlanID",
        "baseName": "PlanID",
        "type": "string"
    },
    {
        "name": "SequenceNumber",
        "baseName": "SequenceNumber",
        "type": "number"
    },
    {
        "name": "TotalNbOfPayments",
        "baseName": "TotalNbOfPayments",
        "type": "number"
    }
];
(function (Instalment) {
    let InstalmentTypeEnum;
    (function (InstalmentTypeEnum) {
        InstalmentTypeEnum[InstalmentTypeEnum["DeferredInstalments"] = 'DeferredInstalments'] = "DeferredInstalments";
        InstalmentTypeEnum[InstalmentTypeEnum["EqualInstalments"] = 'EqualInstalments'] = "EqualInstalments";
        InstalmentTypeEnum[InstalmentTypeEnum["InequalInstalments"] = 'InequalInstalments'] = "InequalInstalments";
    })(InstalmentTypeEnum = Instalment.InstalmentTypeEnum || (Instalment.InstalmentTypeEnum = {}));
    let PeriodUnitEnum;
    (function (PeriodUnitEnum) {
        PeriodUnitEnum[PeriodUnitEnum["Annual"] = 'Annual'] = "Annual";
        PeriodUnitEnum[PeriodUnitEnum["Daily"] = 'Daily'] = "Daily";
        PeriodUnitEnum[PeriodUnitEnum["Monthly"] = 'Monthly'] = "Monthly";
        PeriodUnitEnum[PeriodUnitEnum["Weekly"] = 'Weekly'] = "Weekly";
    })(PeriodUnitEnum = Instalment.PeriodUnitEnum || (Instalment.PeriodUnitEnum = {}));
})(Instalment = exports.Instalment || (exports.Instalment = {}));
//# sourceMappingURL=instalment.js.map