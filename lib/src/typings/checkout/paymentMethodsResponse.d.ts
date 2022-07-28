import { PaymentMethod } from './paymentMethod';
import { StoredPaymentMethod } from './storedPaymentMethod';
export declare class PaymentMethodsResponse {
    /**
    * Detailed list of payment methods required to generate payment forms.
    */
    'paymentMethods'?: Array<PaymentMethod>;
    /**
    * List of all stored payment methods.
    */
    'storedPaymentMethods'?: Array<StoredPaymentMethod>;
}
