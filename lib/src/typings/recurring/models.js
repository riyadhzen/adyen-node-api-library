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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./address"), exports);
__exportStar(require("./amount"), exports);
__exportStar(require("./bankAccount"), exports);
__exportStar(require("./card"), exports);
__exportStar(require("./disableRequest"), exports);
__exportStar(require("./disableResult"), exports);
__exportStar(require("./name"), exports);
__exportStar(require("./notifyShopperRequest"), exports);
__exportStar(require("./notifyShopperResult"), exports);
__exportStar(require("./recurring"), exports);
__exportStar(require("./recurringDetail"), exports);
__exportStar(require("./recurringDetailsRequest"), exports);
__exportStar(require("./recurringDetailsResult"), exports);
__exportStar(require("./scheduleAccountUpdaterRequest"), exports);
__exportStar(require("./scheduleAccountUpdaterResult"), exports);
__exportStar(require("./serviceError"), exports);
__exportStar(require("./recurringDetailContainer"), exports);
const address_1 = require("./address");
const amount_1 = require("./amount");
const bankAccount_1 = require("./bankAccount");
const card_1 = require("./card");
const disableRequest_1 = require("./disableRequest");
const disableResult_1 = require("./disableResult");
const name_1 = require("./name");
const notifyShopperRequest_1 = require("./notifyShopperRequest");
const notifyShopperResult_1 = require("./notifyShopperResult");
const recurring_1 = require("./recurring");
const recurringDetail_1 = require("./recurringDetail");
const recurringDetailsRequest_1 = require("./recurringDetailsRequest");
const recurringDetailsResult_1 = require("./recurringDetailsResult");
const scheduleAccountUpdaterRequest_1 = require("./scheduleAccountUpdaterRequest");
const scheduleAccountUpdaterResult_1 = require("./scheduleAccountUpdaterResult");
const serviceError_1 = require("./serviceError");
const recurringDetailContainer_1 = require("./recurringDetailContainer");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "Recurring.ContractEnum": recurring_1.Recurring.ContractEnum,
    "Recurring.TokenServiceEnum": recurring_1.Recurring.TokenServiceEnum,
};
let typeMap = {
    "Address": address_1.Address,
    "Amount": amount_1.Amount,
    "BankAccount": bankAccount_1.BankAccount,
    "Card": card_1.Card,
    "DisableRequest": disableRequest_1.DisableRequest,
    "DisableResult": disableResult_1.DisableResult,
    "Name": name_1.Name,
    "NotifyShopperRequest": notifyShopperRequest_1.NotifyShopperRequest,
    "NotifyShopperResult": notifyShopperResult_1.NotifyShopperResult,
    "Recurring": recurring_1.Recurring,
    "RecurringDetail": recurringDetail_1.RecurringDetail,
    "RecurringDetailsRequest": recurringDetailsRequest_1.RecurringDetailsRequest,
    "RecurringDetailsResult": recurringDetailsResult_1.RecurringDetailsResult,
    'RecurringDetailContainer': recurringDetailContainer_1.RecurringDetailContainer,
    "ScheduleAccountUpdaterRequest": scheduleAccountUpdaterRequest_1.ScheduleAccountUpdaterRequest,
    "ScheduleAccountUpdaterResult": scheduleAccountUpdaterResult_1.ScheduleAccountUpdaterResult,
    "ServiceError": serviceError_1.ServiceError,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=models.js.map