import { Item } from './item';
export declare class SubInputDetail {
    /**
    * Configuration parameters for the required input.
    */
    'configuration'?: {
        [key: string]: string;
    };
    /**
    * In case of a select, the items to choose from.
    */
    'items'?: Array<Item>;
    /**
    * The value to provide in the result.
    */
    'key'?: string;
    /**
    * True if this input is optional to provide.
    */
    'optional'?: boolean;
    /**
    * The type of the required input.
    */
    'type'?: string;
    /**
    * The value can be pre-filled, if available.
    */
    'value'?: string;
}
