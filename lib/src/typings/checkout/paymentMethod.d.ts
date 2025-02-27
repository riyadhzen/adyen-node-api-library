import { InputDetail } from './inputDetail';
import { PaymentMethodGroup } from './paymentMethodGroup';
import { PaymentMethodIssuer } from './paymentMethodIssuer';
export declare class PaymentMethod {
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
    'fundingSource'?: PaymentMethod.FundingSourceEnum;
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
    * The unique payment method code.
    */
    'type'?: string;
}
export declare namespace PaymentMethod {
    enum FundingSourceEnum {
        Debit
    }
}
