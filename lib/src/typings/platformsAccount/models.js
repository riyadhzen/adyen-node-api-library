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
__exportStar(require("./account"), exports);
__exportStar(require("./accountEvent"), exports);
__exportStar(require("./accountHolderDetails"), exports);
__exportStar(require("./accountHolderStatus"), exports);
__exportStar(require("./accountPayoutState"), exports);
__exportStar(require("./accountProcessingState"), exports);
__exportStar(require("./amount"), exports);
__exportStar(require("./bankAccountDetail"), exports);
__exportStar(require("./businessDetails"), exports);
__exportStar(require("./closeAccountHolderRequest"), exports);
__exportStar(require("./closeAccountHolderResponse"), exports);
__exportStar(require("./closeAccountRequest"), exports);
__exportStar(require("./closeAccountResponse"), exports);
__exportStar(require("./createAccountHolderRequest"), exports);
__exportStar(require("./createAccountHolderResponse"), exports);
__exportStar(require("./createAccountRequest"), exports);
__exportStar(require("./createAccountResponse"), exports);
__exportStar(require("./deleteBankAccountRequest"), exports);
__exportStar(require("./deletePayoutMethodRequest"), exports);
__exportStar(require("./deleteShareholderRequest"), exports);
__exportStar(require("./deleteSignatoriesRequest"), exports);
__exportStar(require("./documentDetail"), exports);
__exportStar(require("./errorFieldType"), exports);
__exportStar(require("./fieldType"), exports);
__exportStar(require("./genericResponse"), exports);
__exportStar(require("./getAccountHolderRequest"), exports);
__exportStar(require("./getAccountHolderResponse"), exports);
__exportStar(require("./getAccountHolderStatusResponse"), exports);
__exportStar(require("./getTaxFormRequest"), exports);
__exportStar(require("./getTaxFormResponse"), exports);
__exportStar(require("./getUploadedDocumentsRequest"), exports);
__exportStar(require("./getUploadedDocumentsResponse"), exports);
__exportStar(require("./individualDetails"), exports);
__exportStar(require("./kYCCheckResult2"), exports);
__exportStar(require("./kYCCheckStatusData"), exports);
__exportStar(require("./kYCCheckSummary"), exports);
__exportStar(require("./kYCLegalArrangementCheckResult"), exports);
__exportStar(require("./kYCLegalArrangementEntityCheckResult"), exports);
__exportStar(require("./kYCPayoutMethodCheckResult"), exports);
__exportStar(require("./kYCShareholderCheckResult"), exports);
__exportStar(require("./kYCSignatoryCheckResult"), exports);
__exportStar(require("./kYCVerificationResult2"), exports);
__exportStar(require("./legalArrangementDetail"), exports);
__exportStar(require("./legalArrangementEntityDetail"), exports);
__exportStar(require("./payoutMethod"), exports);
__exportStar(require("./payoutScheduleResponse"), exports);
__exportStar(require("./performVerificationRequest"), exports);
__exportStar(require("./personalDocumentData"), exports);
__exportStar(require("./serviceError"), exports);
__exportStar(require("./shareholderContact"), exports);
__exportStar(require("./signatoryContact"), exports);
__exportStar(require("./storeDetail"), exports);
__exportStar(require("./suspendAccountHolderRequest"), exports);
__exportStar(require("./suspendAccountHolderResponse"), exports);
__exportStar(require("./unSuspendAccountHolderRequest"), exports);
__exportStar(require("./unSuspendAccountHolderResponse"), exports);
__exportStar(require("./updateAccountHolderRequest"), exports);
__exportStar(require("./updateAccountHolderResponse"), exports);
__exportStar(require("./updateAccountHolderStateRequest"), exports);
__exportStar(require("./updateAccountRequest"), exports);
__exportStar(require("./updateAccountResponse"), exports);
__exportStar(require("./updatePayoutScheduleRequest"), exports);
__exportStar(require("./uploadDocumentRequest"), exports);
__exportStar(require("./viasAddress"), exports);
__exportStar(require("./viasName"), exports);
__exportStar(require("./viasPersonalData"), exports);
__exportStar(require("./viasPhoneNumber"), exports);
const account_1 = require("./account");
const accountEvent_1 = require("./accountEvent");
const accountHolderDetails_1 = require("./accountHolderDetails");
const accountHolderStatus_1 = require("./accountHolderStatus");
const accountPayoutState_1 = require("./accountPayoutState");
const accountProcessingState_1 = require("./accountProcessingState");
const amount_1 = require("./amount");
const bankAccountDetail_1 = require("./bankAccountDetail");
const businessDetails_1 = require("./businessDetails");
const closeAccountHolderRequest_1 = require("./closeAccountHolderRequest");
const closeAccountHolderResponse_1 = require("./closeAccountHolderResponse");
const closeAccountRequest_1 = require("./closeAccountRequest");
const closeAccountResponse_1 = require("./closeAccountResponse");
const createAccountHolderRequest_1 = require("./createAccountHolderRequest");
const createAccountHolderResponse_1 = require("./createAccountHolderResponse");
const createAccountRequest_1 = require("./createAccountRequest");
const createAccountResponse_1 = require("./createAccountResponse");
const deleteBankAccountRequest_1 = require("./deleteBankAccountRequest");
const deletePayoutMethodRequest_1 = require("./deletePayoutMethodRequest");
const deleteShareholderRequest_1 = require("./deleteShareholderRequest");
const deleteSignatoriesRequest_1 = require("./deleteSignatoriesRequest");
const documentDetail_1 = require("./documentDetail");
const errorFieldType_1 = require("./errorFieldType");
const fieldType_1 = require("./fieldType");
const genericResponse_1 = require("./genericResponse");
const getAccountHolderRequest_1 = require("./getAccountHolderRequest");
const getAccountHolderResponse_1 = require("./getAccountHolderResponse");
const getAccountHolderStatusResponse_1 = require("./getAccountHolderStatusResponse");
const getTaxFormRequest_1 = require("./getTaxFormRequest");
const getTaxFormResponse_1 = require("./getTaxFormResponse");
const getUploadedDocumentsRequest_1 = require("./getUploadedDocumentsRequest");
const getUploadedDocumentsResponse_1 = require("./getUploadedDocumentsResponse");
const individualDetails_1 = require("./individualDetails");
const kYCCheckResult2_1 = require("./kYCCheckResult2");
const kYCCheckStatusData_1 = require("./kYCCheckStatusData");
const kYCCheckSummary_1 = require("./kYCCheckSummary");
const kYCLegalArrangementCheckResult_1 = require("./kYCLegalArrangementCheckResult");
const kYCLegalArrangementEntityCheckResult_1 = require("./kYCLegalArrangementEntityCheckResult");
const kYCPayoutMethodCheckResult_1 = require("./kYCPayoutMethodCheckResult");
const kYCShareholderCheckResult_1 = require("./kYCShareholderCheckResult");
const kYCSignatoryCheckResult_1 = require("./kYCSignatoryCheckResult");
const kYCVerificationResult2_1 = require("./kYCVerificationResult2");
const legalArrangementDetail_1 = require("./legalArrangementDetail");
const legalArrangementEntityDetail_1 = require("./legalArrangementEntityDetail");
const payoutMethod_1 = require("./payoutMethod");
const payoutScheduleResponse_1 = require("./payoutScheduleResponse");
const performVerificationRequest_1 = require("./performVerificationRequest");
const personalDocumentData_1 = require("./personalDocumentData");
const serviceError_1 = require("./serviceError");
const shareholderContact_1 = require("./shareholderContact");
const signatoryContact_1 = require("./signatoryContact");
const storeDetail_1 = require("./storeDetail");
const suspendAccountHolderRequest_1 = require("./suspendAccountHolderRequest");
const suspendAccountHolderResponse_1 = require("./suspendAccountHolderResponse");
const unSuspendAccountHolderRequest_1 = require("./unSuspendAccountHolderRequest");
const unSuspendAccountHolderResponse_1 = require("./unSuspendAccountHolderResponse");
const updateAccountHolderRequest_1 = require("./updateAccountHolderRequest");
const updateAccountHolderResponse_1 = require("./updateAccountHolderResponse");
const updateAccountHolderStateRequest_1 = require("./updateAccountHolderStateRequest");
const updateAccountRequest_1 = require("./updateAccountRequest");
const updateAccountResponse_1 = require("./updateAccountResponse");
const updatePayoutScheduleRequest_1 = require("./updatePayoutScheduleRequest");
const uploadDocumentRequest_1 = require("./uploadDocumentRequest");
const viasAddress_1 = require("./viasAddress");
const viasName_1 = require("./viasName");
const viasPersonalData_1 = require("./viasPersonalData");
const viasPhoneNumber_1 = require("./viasPhoneNumber");
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
    "Account.PayoutSpeedEnum": account_1.Account.PayoutSpeedEnum,
    "AccountEvent.EventEnum": accountEvent_1.AccountEvent.EventEnum,
    "AccountHolderStatus.StatusEnum": accountHolderStatus_1.AccountHolderStatus.StatusEnum,
    "CloseAccountResponse.StatusEnum": closeAccountResponse_1.CloseAccountResponse.StatusEnum,
    "CreateAccountHolderRequest.LegalEntityEnum": createAccountHolderRequest_1.CreateAccountHolderRequest.LegalEntityEnum,
    "CreateAccountHolderResponse.LegalEntityEnum": createAccountHolderResponse_1.CreateAccountHolderResponse.LegalEntityEnum,
    "CreateAccountRequest.PayoutScheduleEnum": createAccountRequest_1.CreateAccountRequest.PayoutScheduleEnum,
    "CreateAccountRequest.PayoutSpeedEnum": createAccountRequest_1.CreateAccountRequest.PayoutSpeedEnum,
    "CreateAccountResponse.PayoutSpeedEnum": createAccountResponse_1.CreateAccountResponse.PayoutSpeedEnum,
    "CreateAccountResponse.StatusEnum": createAccountResponse_1.CreateAccountResponse.StatusEnum,
    "DocumentDetail.DocumentTypeEnum": documentDetail_1.DocumentDetail.DocumentTypeEnum,
    "FieldType.FieldNameEnum": fieldType_1.FieldType.FieldNameEnum,
    "GetAccountHolderResponse.LegalEntityEnum": getAccountHolderResponse_1.GetAccountHolderResponse.LegalEntityEnum,
    "KYCCheckStatusData.StatusEnum": kYCCheckStatusData_1.KYCCheckStatusData.StatusEnum,
    "KYCCheckStatusData.TypeEnum": kYCCheckStatusData_1.KYCCheckStatusData.TypeEnum,
    "LegalArrangementDetail.LegalFormEnum": legalArrangementDetail_1.LegalArrangementDetail.LegalFormEnum,
    "LegalArrangementDetail.TypeEnum": legalArrangementDetail_1.LegalArrangementDetail.TypeEnum,
    "LegalArrangementEntityDetail.LegalArrangementMemberEnum": legalArrangementEntityDetail_1.LegalArrangementEntityDetail.LegalArrangementMemberEnum,
    "LegalArrangementEntityDetail.LegalEntityTypeEnum": legalArrangementEntityDetail_1.LegalArrangementEntityDetail.LegalEntityTypeEnum,
    "PayoutMethod.PayoutMethodTypeEnum": payoutMethod_1.PayoutMethod.PayoutMethodTypeEnum,
    "PayoutScheduleResponse.ScheduleEnum": payoutScheduleResponse_1.PayoutScheduleResponse.ScheduleEnum,
    "PerformVerificationRequest.AccountStateTypeEnum": performVerificationRequest_1.PerformVerificationRequest.AccountStateTypeEnum,
    "PersonalDocumentData.TypeEnum": personalDocumentData_1.PersonalDocumentData.TypeEnum,
    "ShareholderContact.ShareholderTypeEnum": shareholderContact_1.ShareholderContact.ShareholderTypeEnum,
    "StoreDetail.ShopperInteractionEnum": storeDetail_1.StoreDetail.ShopperInteractionEnum,
    "StoreDetail.StatusEnum": storeDetail_1.StoreDetail.StatusEnum,
    "UpdateAccountHolderRequest.LegalEntityEnum": updateAccountHolderRequest_1.UpdateAccountHolderRequest.LegalEntityEnum,
    "UpdateAccountHolderResponse.LegalEntityEnum": updateAccountHolderResponse_1.UpdateAccountHolderResponse.LegalEntityEnum,
    "UpdateAccountHolderStateRequest.StateTypeEnum": updateAccountHolderStateRequest_1.UpdateAccountHolderStateRequest.StateTypeEnum,
    "UpdateAccountRequest.PayoutSpeedEnum": updateAccountRequest_1.UpdateAccountRequest.PayoutSpeedEnum,
    "UpdateAccountResponse.PayoutSpeedEnum": updateAccountResponse_1.UpdateAccountResponse.PayoutSpeedEnum,
    "UpdatePayoutScheduleRequest.ActionEnum": updatePayoutScheduleRequest_1.UpdatePayoutScheduleRequest.ActionEnum,
    "UpdatePayoutScheduleRequest.ScheduleEnum": updatePayoutScheduleRequest_1.UpdatePayoutScheduleRequest.ScheduleEnum,
    "ViasName.GenderEnum": viasName_1.ViasName.GenderEnum,
    "ViasPhoneNumber.PhoneTypeEnum": viasPhoneNumber_1.ViasPhoneNumber.PhoneTypeEnum,
};
let typeMap = {
    "Account": account_1.Account,
    "AccountEvent": accountEvent_1.AccountEvent,
    "AccountHolderDetails": accountHolderDetails_1.AccountHolderDetails,
    "AccountHolderStatus": accountHolderStatus_1.AccountHolderStatus,
    "AccountPayoutState": accountPayoutState_1.AccountPayoutState,
    "AccountProcessingState": accountProcessingState_1.AccountProcessingState,
    "Amount": amount_1.Amount,
    "BankAccountDetail": bankAccountDetail_1.BankAccountDetail,
    "BusinessDetails": businessDetails_1.BusinessDetails,
    "CloseAccountHolderRequest": closeAccountHolderRequest_1.CloseAccountHolderRequest,
    "CloseAccountHolderResponse": closeAccountHolderResponse_1.CloseAccountHolderResponse,
    "CloseAccountRequest": closeAccountRequest_1.CloseAccountRequest,
    "CloseAccountResponse": closeAccountResponse_1.CloseAccountResponse,
    "CreateAccountHolderRequest": createAccountHolderRequest_1.CreateAccountHolderRequest,
    "CreateAccountHolderResponse": createAccountHolderResponse_1.CreateAccountHolderResponse,
    "CreateAccountRequest": createAccountRequest_1.CreateAccountRequest,
    "CreateAccountResponse": createAccountResponse_1.CreateAccountResponse,
    "DeleteBankAccountRequest": deleteBankAccountRequest_1.DeleteBankAccountRequest,
    "DeletePayoutMethodRequest": deletePayoutMethodRequest_1.DeletePayoutMethodRequest,
    "DeleteShareholderRequest": deleteShareholderRequest_1.DeleteShareholderRequest,
    "DeleteSignatoriesRequest": deleteSignatoriesRequest_1.DeleteSignatoriesRequest,
    "DocumentDetail": documentDetail_1.DocumentDetail,
    "ErrorFieldType": errorFieldType_1.ErrorFieldType,
    "FieldType": fieldType_1.FieldType,
    "GenericResponse": genericResponse_1.GenericResponse,
    "GetAccountHolderRequest": getAccountHolderRequest_1.GetAccountHolderRequest,
    "GetAccountHolderResponse": getAccountHolderResponse_1.GetAccountHolderResponse,
    "GetAccountHolderStatusResponse": getAccountHolderStatusResponse_1.GetAccountHolderStatusResponse,
    "GetTaxFormRequest": getTaxFormRequest_1.GetTaxFormRequest,
    "GetTaxFormResponse": getTaxFormResponse_1.GetTaxFormResponse,
    "GetUploadedDocumentsRequest": getUploadedDocumentsRequest_1.GetUploadedDocumentsRequest,
    "GetUploadedDocumentsResponse": getUploadedDocumentsResponse_1.GetUploadedDocumentsResponse,
    "IndividualDetails": individualDetails_1.IndividualDetails,
    "KYCCheckResult2": kYCCheckResult2_1.KYCCheckResult2,
    "KYCCheckStatusData": kYCCheckStatusData_1.KYCCheckStatusData,
    "KYCCheckSummary": kYCCheckSummary_1.KYCCheckSummary,
    "KYCLegalArrangementCheckResult": kYCLegalArrangementCheckResult_1.KYCLegalArrangementCheckResult,
    "KYCLegalArrangementEntityCheckResult": kYCLegalArrangementEntityCheckResult_1.KYCLegalArrangementEntityCheckResult,
    "KYCPayoutMethodCheckResult": kYCPayoutMethodCheckResult_1.KYCPayoutMethodCheckResult,
    "KYCShareholderCheckResult": kYCShareholderCheckResult_1.KYCShareholderCheckResult,
    "KYCSignatoryCheckResult": kYCSignatoryCheckResult_1.KYCSignatoryCheckResult,
    "KYCVerificationResult2": kYCVerificationResult2_1.KYCVerificationResult2,
    "LegalArrangementDetail": legalArrangementDetail_1.LegalArrangementDetail,
    "LegalArrangementEntityDetail": legalArrangementEntityDetail_1.LegalArrangementEntityDetail,
    "PayoutMethod": payoutMethod_1.PayoutMethod,
    "PayoutScheduleResponse": payoutScheduleResponse_1.PayoutScheduleResponse,
    "PerformVerificationRequest": performVerificationRequest_1.PerformVerificationRequest,
    "PersonalDocumentData": personalDocumentData_1.PersonalDocumentData,
    "ServiceError": serviceError_1.ServiceError,
    "ShareholderContact": shareholderContact_1.ShareholderContact,
    "SignatoryContact": signatoryContact_1.SignatoryContact,
    "StoreDetail": storeDetail_1.StoreDetail,
    "SuspendAccountHolderRequest": suspendAccountHolderRequest_1.SuspendAccountHolderRequest,
    "SuspendAccountHolderResponse": suspendAccountHolderResponse_1.SuspendAccountHolderResponse,
    "UnSuspendAccountHolderRequest": unSuspendAccountHolderRequest_1.UnSuspendAccountHolderRequest,
    "UnSuspendAccountHolderResponse": unSuspendAccountHolderResponse_1.UnSuspendAccountHolderResponse,
    "UpdateAccountHolderRequest": updateAccountHolderRequest_1.UpdateAccountHolderRequest,
    "UpdateAccountHolderResponse": updateAccountHolderResponse_1.UpdateAccountHolderResponse,
    "UpdateAccountHolderStateRequest": updateAccountHolderStateRequest_1.UpdateAccountHolderStateRequest,
    "UpdateAccountRequest": updateAccountRequest_1.UpdateAccountRequest,
    "UpdateAccountResponse": updateAccountResponse_1.UpdateAccountResponse,
    "UpdatePayoutScheduleRequest": updatePayoutScheduleRequest_1.UpdatePayoutScheduleRequest,
    "UploadDocumentRequest": uploadDocumentRequest_1.UploadDocumentRequest,
    "ViasAddress": viasAddress_1.ViasAddress,
    "ViasName": viasName_1.ViasName,
    "ViasPersonalData": viasPersonalData_1.ViasPersonalData,
    "ViasPhoneNumber": viasPhoneNumber_1.ViasPhoneNumber,
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