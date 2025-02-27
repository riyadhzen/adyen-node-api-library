/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
export * from './account';
export * from './accountEvent';
export * from './accountHolderDetails';
export * from './accountHolderStatus';
export * from './accountPayoutState';
export * from './accountProcessingState';
export * from './amount';
export * from './bankAccountDetail';
export * from './businessDetails';
export * from './closeAccountHolderRequest';
export * from './closeAccountHolderResponse';
export * from './closeAccountRequest';
export * from './closeAccountResponse';
export * from './createAccountHolderRequest';
export * from './createAccountHolderResponse';
export * from './createAccountRequest';
export * from './createAccountResponse';
export * from './deleteBankAccountRequest';
export * from './deletePayoutMethodRequest';
export * from './deleteShareholderRequest';
export * from './deleteSignatoriesRequest';
export * from './documentDetail';
export * from './errorFieldType';
export * from './fieldType';
export * from './genericResponse';
export * from './getAccountHolderRequest';
export * from './getAccountHolderResponse';
export * from './getAccountHolderStatusResponse';
export * from './getTaxFormRequest';
export * from './getTaxFormResponse';
export * from './getUploadedDocumentsRequest';
export * from './getUploadedDocumentsResponse';
export * from './individualDetails';
export * from './kYCCheckResult2';
export * from './kYCCheckStatusData';
export * from './kYCCheckSummary';
export * from './kYCLegalArrangementCheckResult';
export * from './kYCLegalArrangementEntityCheckResult';
export * from './kYCPayoutMethodCheckResult';
export * from './kYCShareholderCheckResult';
export * from './kYCSignatoryCheckResult';
export * from './kYCVerificationResult2';
export * from './legalArrangementDetail';
export * from './legalArrangementEntityDetail';
export * from './payoutMethod';
export * from './payoutScheduleResponse';
export * from './performVerificationRequest';
export * from './personalDocumentData';
export * from './serviceError';
export * from './shareholderContact';
export * from './signatoryContact';
export * from './storeDetail';
export * from './suspendAccountHolderRequest';
export * from './suspendAccountHolderResponse';
export * from './unSuspendAccountHolderRequest';
export * from './unSuspendAccountHolderResponse';
export * from './updateAccountHolderRequest';
export * from './updateAccountHolderResponse';
export * from './updateAccountHolderStateRequest';
export * from './updateAccountRequest';
export * from './updateAccountResponse';
export * from './updatePayoutScheduleRequest';
export * from './uploadDocumentRequest';
export * from './viasAddress';
export * from './viasName';
export * from './viasPersonalData';
export * from './viasPhoneNumber';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
