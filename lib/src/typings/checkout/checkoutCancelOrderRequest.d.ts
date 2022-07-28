import { CheckoutOrder } from './checkoutOrder';
export declare class CheckoutCancelOrderRequest {
    /**
    * The merchant account identifier that orderData belongs to.
    */
    'merchantAccount': string;
    'order': CheckoutOrder;
}
