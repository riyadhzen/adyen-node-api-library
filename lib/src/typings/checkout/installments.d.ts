export declare class Installments {
    /**
    * The installment plan, used for [card installments in Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan). By default, this is set to **regular**. Possible values: * **regular** * **revolving**
    */
    'plan'?: Installments.PlanEnum;
    /**
    * Defines the number of installments. Its value needs to be greater than zero.  Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.
    */
    'value': number;
}
export declare namespace Installments {
    enum PlanEnum {
        Regular,
        Revolving
    }
}
