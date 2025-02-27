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
import { AdminResponse } from './adminResponse';
import { BalanceInquiryResponse } from './balanceInquiryResponse';
import { BatchResponse } from './batchResponse';
import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { CardReaderInitResponse } from './cardReaderInitResponse';
import { CardReaderPowerOffResponse } from './cardReaderPowerOffResponse';
import { ContentInformation } from './contentInformation';
import { DiagnosisResponse } from './diagnosisResponse';
import { DisplayResponse } from './displayResponse';
import { EnableServiceResponse } from './enableServiceResponse';
import { GetTotalsResponse } from './getTotalsResponse';
import { InputResponse } from './inputResponse';
import { LoginResponse } from './loginResponse';
import { LogoutResponse } from './logoutResponse';
import { LoyaltyResponse } from './loyaltyResponse';
import { MessageHeader } from './messageHeader';
import { PINResponse } from './pINResponse';
import { PaymentResponse } from './paymentResponse';
import { PrintResponse } from './printResponse';
import { ReconciliationResponse } from './reconciliationResponse';
import { ReversalResponse } from './reversalResponse';
import { SoundResponse } from './soundResponse';
import { StoredValueResponse } from './storedValueResponse';
import { TransactionStatusResponse } from './transactionStatusResponse';
import { TransmitResponse } from './transmitResponse';
export declare class SaleToPOIResponse {
    'AdminResponse'?: AdminResponse;
    'BalanceInquiryResponse'?: BalanceInquiryResponse;
    'BatchResponse'?: BatchResponse;
    'CardAcquisitionResponse'?: CardAcquisitionResponse;
    'CardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'CardReaderInitResponse'?: CardReaderInitResponse;
    'CardReaderPowerOffResponse'?: CardReaderPowerOffResponse;
    'DiagnosisResponse'?: DiagnosisResponse;
    'DisplayResponse'?: DisplayResponse;
    'EnableServiceResponse'?: EnableServiceResponse;
    'GetTotalsResponse'?: GetTotalsResponse;
    'InputResponse'?: InputResponse;
    'LoginResponse'?: LoginResponse;
    'LogoutResponse'?: LogoutResponse;
    'LoyaltyResponse'?: LoyaltyResponse;
    'MessageHeader': MessageHeader;
    'PaymentResponse'?: PaymentResponse;
    'PINResponse'?: PINResponse;
    'PrintResponse'?: PrintResponse;
    'ReconciliationResponse'?: ReconciliationResponse;
    'ReversalResponse'?: ReversalResponse;
    'SecurityTrailer'?: ContentInformation;
    'SoundResponse'?: SoundResponse;
    'StoredValueResponse'?: StoredValueResponse;
    'TransactionStatusResponse'?: TransactionStatusResponse;
    'TransmitResponse'?: TransmitResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
