import { InputDetail } from './inputDetail';
import { PaymentMethodGroup } from './paymentMethodGroup';
import { PaymentMethodIssuer } from './paymentMethodIssuer';
import { StoredDetails } from './storedDetails';
export declare class RecurringDetail {
    /**
    * Brand for the selected gift card. For example: plastix, hmclub.
    */
    'brand'?: string;
    /**
    * List of possible brands. For example: visa, mc.
    */
    'brands'?: Array<string>;
    /**
    * The configuration of the payment method.
    */
    'configuration'?: {
        [key: string]: string;
    };
    /**
    * The funding source of the payment method.
    */
    'fundingSource'?: RecurringDetail.FundingSourceEnum;
    'group'?: PaymentMethodGroup;
    /**
    * All input details to be provided to complete the payment with this payment method.
    */
    'inputDetails'?: Array<InputDetail>;
    /**
    * A list of issuers for this payment method.
    */
    'issuers'?: Array<PaymentMethodIssuer>;
    /**
    * The displayable name of this payment method.
    */
    'name'?: string;
    /**
    * The reference that uniquely identifies the recurring detail.
    */
    'recurringDetailReference'?: string;
    'storedDetails'?: StoredDetails;
    /**
    * The unique payment method code.
    */
    'type'?: string;
}
export declare namespace RecurringDetail {
    enum FundingSourceEnum {
        Debit
    }
}
