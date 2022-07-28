import { FraudCheckResult } from './fraudCheckResult';
export declare class FraudResult {
    /**
    * The total fraud score generated by the risk checks.
    */
    'accountScore': number;
    /**
    * The result of the individual risk checks.
    */
    'results'?: Array<FraudCheckResult>;
}
